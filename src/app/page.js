'use client';

import React, { useEffect, useState } from "react";
import Carousel from "./component/Carousel";

export default function Home() {

  // https://www.themealdb.com/api/json/v1/1/categories.php
  const [meals, setMeals] = useState([]);
  const fetchMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const data = await response.json();
      setMeals(data?.categories || []);
      // return data.categories;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  useEffect(() => {
    fetchMeals();
  }
    , []);
  return (
    <div className="container mx-auto ">
      <div>
      <Carousel></Carousel>
      </div>
      <h1 className="text-center text-3xl font-bold uppercase my-10">!------- Food Items {meals.length}-------! </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
        {meals?.map((singleMeal) => (
          <div
            key={singleMeal.idCategory}
            className="border border-gray-200 p-2 shadow-2xl rounded-md group relative transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
          >
            <img
              src={singleMeal.strCategoryThumb}
              alt={singleMeal.strCategory}
              className=" w-full  object-cover rounded-md"
            />  
            <h2 className="text-xl">strCategory: {singleMeal.strCategory}</h2>
            <h4>strCategoryDescription: {singleMeal.strCategoryDescription.split(' ').slice(0, 30).join(' ')}</h4>
          </div>
        ))}
      </div>     
    </div>
  );
}
