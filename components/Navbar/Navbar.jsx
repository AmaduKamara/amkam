import React from "react";
import Link from "next/link";
// import {Menu} from "../icons/Menu";

const Navbar = () => {
  return (
    <div className="bg-primary px-16 py-5 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-16 flex justify-between items-center">
        <div>
          <h1 className="text-white text-4xl">
            <span className="logo-text">Dev</span> Amkam
          </h1>
        </div>
        <nav>
          <ul className="flex items-center">
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin">
                  Home
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin">
                  About
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin">
                  Skills
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin">
                  Services
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin">
                  Portfolio
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/">
            <a className="text-white text-xl btn-border rounded-md py-2 px-6 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110">
              Resume
            </a>
          </Link>
        </div>
      </div>
      {/* <Menu className="mobile-menu" /> */}
    </div>
  );
};

export default Navbar;
