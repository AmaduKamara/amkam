import React from "react";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";

import {
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <main className="container mx-auto px-16 layout-main">
        <div>{children}</div>
        <div className="social-medias rounded-md flex justify-center items-center">
          <ul>
            <li>
              <Link href="https://www.linkedin.com/in/amadu-kamara-3b60a25b/">
                <a target="_blank">
                  <FaLinkedin className="text-5xl h-text-color" />
                </a>
              </Link>
            </li>
            <li className="mt-4">
              {" "}
              <Link href="https://twitter.com/home">
                <a target="_blank">
                  <FaTwitterSquare className="text-5xl h-text-color" />
                </a>
              </Link>
            </li>
            <li className="mt-4">
              <Link href="https://github.com/AmaduKamara">
                <a target="_blank">
                  <FaGithubSquare className="text-5xl h-text-color" />
                </a>
              </Link>
            </li>
            <li className="mt-4">
              {" "}
              <Link href="https://www.facebook.com/">
                <a target="_blank">
                  <FaFacebookSquare className="text-5xl h-text-color" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Layout;
