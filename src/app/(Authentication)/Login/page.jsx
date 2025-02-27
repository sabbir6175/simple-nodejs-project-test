import Link from "next/link";
import React from "react";
import {  RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const page = () => {
  return (
    <div className="container mx-auto  my-10">
      <form action="" className="w-1/2 mx-auto rounded-sm bg-gradient-to-bl from-slate-400 to-red-100 place-content-center  border-2  px-5 ">
      <h1 className="text-center text-3xl font-bold mt-10 mb-5">Welcome Back</h1>
        {/* email input with icon */}
        <label htmlFor="" className="font-bold ">Email : </label>
        <div className="w-full  relative mb-4">
         
          <MdOutlineMail className="absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="peer  input  input-bordered input-warning border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
          />
        </div>

        {/* password input with icon */}
        <label htmlFor="" className=" font-bold">Password : </label>
        <div className="w-full  relative mb-4">
          <RiLockPasswordLine className="absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
          />
        </div>

        {/* login button */}
        <div className="w-full  mb-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-slate-600 to-red-300 py-3 rounded-md transition-colors duration-300 hover:bg-primary-dark"
          >
            Login
          </button>
        </div>

        {/* social login options */}
        <div className="w-full  mb-4 flex justify-center gap-4">
          <button className="bg-gradient-to-bl from-slate-200 to-red-300 text-black py-2 px-4 rounded-md">Login with Facebook</button>
          <button className="bg-gradient-to-bl from-red-400 to-purple-100 text-black py-2 px-4 rounded-md">Login with Google</button>
        </div>

        {/* sign-up link */}
        <div className="w-full my-10 text-center">
          <Link href="/Register">
          Don't have an account? 

            <button className="text-primary hover:underline text-red-400"> Sign up</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
