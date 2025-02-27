import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-green-300 py-4 text-black ">
        <div className="flex justify-between container mx-auto h-[200px] place-content-center items-center">
      <div>
        <h1>Welcome</h1>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <span>Social</span>
        <div>
            <ul className="flex gap-4">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
