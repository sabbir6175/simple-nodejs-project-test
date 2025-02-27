'use client';

import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";


const MealSearch = () => {
  const [search, setSearch] = useState("");
  const route = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParams}`;
    route.push(url);
  }, [search]);

  return (
    <div className="container mx-auto">
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
    </div>
  );
};

export default MealSearch;
