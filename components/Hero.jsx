import React from "react";
import Image from "next/image";
import heroImage from "../public/images/Amadu Kamara.jpg";
import Check from "../components/icons/Check";

const Hero = () => {
  return (
    /* Hero Setction */
    <section className="grid grid-cols-1 md:grid-cols-2 my-12">
      <div className="pt-10 order-last px-12 md:px-0">
        <h4 className="logo-text text-lg tracking-widest uppercase">Hello!</h4>
        <h1 className="font-semibold h-text-color text-4xl md:text-5xl lg:text-7xl my-2">
          I'm Amadu Kamara
        </h1>
        <ul className="mt-5">
          <li className="flex items-center mb-5 text-xl">
            <div className="bg-gray-100 h-text-color rounded-full p-2 mr-4 text-2xl">
              <Check />
            </div>
            <span className="text-xl md:text-2xl text-gray-300">
              Web designer
            </span>
          </li>
          <li className="flex items-center mb-5 text-xl">
            <div className="bg-gray-100 h-text-color rounded-full p-2 mr-4 text-2xl">
              <Check />
            </div>
            <span className="text-xl md:text-2xl text-gray-300">
              UI/UX designer
            </span>
          </li>
          <li className="flex items-center mb-5 text-xl">
            <div className="bg-gray-100 h-text-color rounded-full p-2 mr-4 text-2xl">
              <Check />
            </div>
            <span className="text-xl md:text-2xl text-gray-300">
              Frontend Developer
            </span>
          </li>
          <li className="flex items-center mb-5 text-xl">
            <div className="bg-gray-100 h-text-color rounded-full p-2 mr-4 text-2xl">
              <Check />
            </div>
            <span className="text-xl md:text-2xl text-gray-300">
              I teach students how to design and develop websites and
              applications
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="bg-btn py-4 md:py-5 px-12 text-xl rounded-md text-white my-6"
        >
          Get in Touch
        </button>
      </div>

      <div className="flex justify-center items-center order-first md:order-last px-12">
        <Image
          src={heroImage}
          alt="Amadu Kamara"
          className="rounded-full shadow-md"
          width={420}
          height={420}
        />
      </div>
    </section>
  );
};

export default Hero;
