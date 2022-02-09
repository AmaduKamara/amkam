import React from "react";
import Link from "next/link";

import ArrowTop from "../components/icons/ArrowTop";

function Footer() {
  return (
    <div>
      <footer className="mt-24 mx-32">
        <div className="flex justify-center items-center">
          <div
            style={{
              border: "1px solid #0f9fc0",
              width: "100%",
              height: "1px",
            }}
            className="w-1/4 hidden sm:block"
          ></div>

          <div className="w-2/4 text-center mx-6">
            <h2 className="text-4xl">Get in Touch</h2>
          </div>

          <div
            style={{
              border: "1px solid #0f9fc0",
              width: "100%",
              height: "1px",
            }}
            className="w-1/4 hidden sm:block"
          ></div>
        </div>
        <div className="flex justify-center mt-16">
          <div className="w-2/4 mr-12">
            <p className="leading-loose text-center text-lg text-gray-300">
              Hello! <br /> Please feel free to say hello or have a coffee chat with
              me. I would love to play my part in the growth of your business.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center w-full">
          <div>
            <button
              type="button"
              className="text-white text-xl btn-border rounded-md py-5 px-10 transition duration-500 ease-in-out hover:bg-sky-500 transform hover:-translate-y-1 hover:scale-110"
            >
              Send Me Message
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link href="/">
            <a className="px-5 py-3 bg-btn rounded shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              {" "}
              <ArrowTop className="cursor-pointer" />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
