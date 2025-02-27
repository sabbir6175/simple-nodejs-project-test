"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setMeals(data?.meals || []);
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div className="container mx-auto">
      <h1 className="text-center my-10 text-2xl font-bold">
        Welcome to Meals page {meals.length}{" "}
      </h1>
      {/* <p>{JSON.stringify(meals)}</p> */}
      <div className=" flex justify-center place-content-center my-10 items-center gap-5">
        <label htmlFor="search" className=" text-black font-bold text-lg">
          Search meals :{" "}
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search meals"
          className="border border-gray-200 p-2 rounded-md outline-green-400 "
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals?.map((singleMeal) => (
          <div
            key={singleMeal.idMeal}
            className="border border-gray-200 p-2 shadow-2xl rounded-md group relative transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
          >
            <img
              src={singleMeal.strMealThumb}
              alt={singleMeal.strMeal}
              className=""
            />
            <h2 className="text-xl">strMeal: {singleMeal.strMeal}</h2>
            <h4>strCategory: {singleMeal.strCategory}</h4>
            <h2>strArea: {singleMeal.strArea}</h2>
            <span>
              strInstructions:{" "}
              {singleMeal.strInstructions.split(" ").slice(0, 15).join(" ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
