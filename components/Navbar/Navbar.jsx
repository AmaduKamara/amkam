import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="py-5 shadow-xl sticky top-0 z-50 backdrop-blur transition-colors duration-500 lg:z-50 dark:border-gray-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-cyan-900/75">
      <div className="px-24 flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-4xl">
            <span className="logo-text">Dev</span>Amkam
          </a>
        </Link>
        <nav>
          <ul className="flex items-center">
            <li className="mx-5">
              <Link href="/">
                <a
                  className={`text-white text-xl hover:text-sky-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin ${
                    router.pathname === "/"
                      ? "text-sky-500 hover:text-sky-700"
                      : ""
                  }`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/about">
                <a
                  className={`text-white text-xl hover:text-sky-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin ${
                    router.pathname === "/about"
                      ? "text-sky-500 hover:text-sky-700"
                      : ""
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/skills">
                <a
                  className={`text-white text-xl hover:text-sky-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin ${
                    router.pathname === "/skills"
                      ? "text-sky-500 hover:text-sky-700"
                      : ""
                  }`}
                >
                  Skills
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/services">
                <a
                  className={`text-white text-xl hover:text-sky-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin ${
                    router.pathname === "/services"
                      ? "text-sky-500 hover:text-sky-700"
                      : ""
                  }`}
                >
                  Services
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/portfolios">
                <a
                  className={`text-white text-xl hover:text-sky-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin ${
                    router.pathname === "/portfolios"
                      ? "text-sky-500 hover:text-sky-700"
                      : ""
                  }`}
                >
                  Portfolios
                </a>
              </Link>
            </li>
            <li className="mx-5">
              <Link href="/contact">
                <a
                  className={`text-white text-xl hover:text-sky-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-thin ${
                    router.pathname === "/contact"
                      ? "text-sky-500 hover:text-sky-700"
                      : ""
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="https://docs.google.com/document/d/1gWkUntRsRidAlwgOadUTdasFwnif9EOFi1q2V7VTeew/edit?usp=sharing">
            <a
              target="_blank"
              className="text-white text-xl btn-border rounded-md py-2 px-6 transition duration-500 ease-in-out hover:bg-sky-500 transform hover:-translate-y-1 hover:scale-110"
            >
              Resume
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
