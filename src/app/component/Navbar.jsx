import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 to-pink-300 py-4 text-white">
      <div className="flex justify-between items-center container mx-auto ">
        <div>
          <img
            src="https://i.ibb.co.com/0V6p4B7j/testimony-feat-bg.png"
            className="w-10 h-10 rounded-full"
            alt=""
          />
        </div>
        <div className="">
          <ul className="flex gap-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/About">
              <li>About</li>
            </Link>
            <Link href="/Meals">
              <li>Meals</li>
            </Link>
            <Link href="/Service">
              <li>Service</li>
            </Link>
            <Link href="/Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            <Link href="/Login">
              <li>Sign In</li>
            </Link>
            <Link href="/Register">
              <li>Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
