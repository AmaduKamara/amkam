import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-primary px-16 py-5 shadow-xl sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto px-16 flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-4xl">
            <span className="logo-text">Dev</span>Amkam
          </a>
        </Link>
        <nav>
          <ul className="flex items-center">
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Home
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  About
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Skills
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Portfolios
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/">
                <a className="text-white text-xl hover:text-blue-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Contact
                </a>
              </Link>
            </li>
            <li className="ml-10">
              <Link href="/">
                <a className="text-white text-xl btn-border rounded-md py-2 px-6 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110">
                  Resume
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
