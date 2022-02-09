import React from "react";
import Image from "next/image";

import onlineLearningPortal from "../public/images/portfolio-images/Online Learning Portal.png";
import cubeRestaurant from "../public/images/portfolio-images/CUBE Restaurant Website.png";
import amkamDevBootcamp from "../public/images/portfolio-images/Amkam DevBootcamp.png";
import mdSeaFood from "../public/images/portfolio-images/MD Seafoods.png";
import covidMetrics from "../public/images/portfolio-images/World COVID-19 Metrics data.png";

const Portfolios = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-start items-center">
        <div className="w-1/5">
          <h1 className="text-5xl font-semibold tracking-widest">Portfolio</h1>
        </div>
        <div
          style={{
            border: "1px solid #0f9fc0",
            width: "100%",
            marginRight: "115px",
          }}
          className="w-4/5 hidden sm:block"
        ></div>
      </div>

      {/* First Portfolio Item */}
      <div className="flex mt-16">
        <div className="w-2/5 -mr-40 z-10">
          <div className="mt-10">
            <h1 className="text-3xl logo-text">COVID-19 Metrics</h1>
          </div>
          <div className="portfolio-bg-popover mt-4 rounded-md shadow-md py-6 px-8">
            <p className="text-lg text-gray-100">
              In this project, I built a React Redux COVID-19 Metrics data
              application that shows infected cases of COVID-19 worldwide. I got
              the data from a free Covid-19 API online. You can search and get
              COVID-19 metrics data about your country.
            </p>
          </div>
          <div className="mt-6">
            <ul className="flex justify-start">
              <li className="text-lg mx-3">React</li>
              <li className="text-lg mx-3">Redux</li>
              <li className="text-lg mx-3">TailwindCSS</li>
              <li className="text-lg mx-3">ESLint</li>
              <li className="text-lg mx-3">Framer Motion</li>
            </ul>
          </div>
        </div>
        <div className="w-3/5 rounded-md">
          <a
            href="https://world-covid-metrics.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={covidMetrics}
              alt="COVID-19 Metrics Data"
              className="shadow-4xl rounded-md"
            />
          </a>
        </div>
      </div>

      {/* Third Portfolio Item */}
      <div className="flex mt-16">
        <div className="w-3/5 rounded-md">
          <a
            href="https://seafoods-app.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={mdSeaFood}
              alt="MD Seafoods"
              className="shadow-4xl rounded-md"
            />
          </a>
        </div>
        <div className="w-2/5 -ml-40 z-10">
          <div className="mt-10 flex justify-end">
            <h1 className="text-3xl logo-text">MD Seafood</h1>
          </div>
          <div className="portfolio-bg-popover mt-4 rounded-md shadow-md py-6 px-8">
            <p className="text-lg text-gray-100">
              The MD Seafoods app capstone project for JavaScript Module. It was
              a great experience developing an app that interacts with an
              external API and displays seafood, one can give a like, and
              comment functionalities.
            </p>
          </div>
          <div className="mt-8">
            <ul className="flex justify-end">
              <li className="text-lg mx-3">HTML & CSS</li>
              <li className="text-lg mx-3">JavaScript</li>
              <li className="text-lg mx-3">Tailwind</li>
              <li className="text-lg mx-3">ESLint</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fourth Portfolio Item */}
      <div className="flex mt-16">
        <div className="w-2/5 -mr-40 z-10">
          <div className="mt-10">
            <h1 className="text-3xl logo-text">Amkam DevBootcamp</h1>
          </div>
          <div className="portfolio-bg-popover mt-4 rounded-md shadow-md py-6 px-8">
            <p className="text-lg text-gray-100">
              Amkam DevBootcamp is a school for people who want to become web
              developers and designers looking for a life-changing career. We do
              in-person and online training for all students from zero till you
              can build a complete website without the help of anyone.
            </p>
          </div>
          <div className="mt-6">
            <ul className="flex justify-start">
              <li className="text-lg mx-3">HTML & CSS</li>
              <li className="text-lg mx-3">ESLint</li>
            </ul>
          </div>
        </div>
        <div className="w-3/5 rounded-md">
          <a
            href="https://amkam-dev-bootcamp.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={amkamDevBootcamp}
              alt="Amkam DevBootcamp"
              className="shadow-4xl rounded-md"
            />
          </a>
        </div>
      </div>

      {/* First Portfolio Item */}
      <div className="flex mt-16">
        <div className="w-3/5 rounded-md">
          <Image
            src={cubeRestaurant}
            alt="Cube Restaurant"
            className="shadow-4xl rounded-md"
          />
        </div>
        <div className="w-2/5 -ml-40 z-10">
          <div className="mt-10 flex justify-end">
            <h1 className="text-3xl logo-text">
              Restaurant Food Delivery Website
            </h1>
          </div>
          <div className="portfolio-bg-popover mt-4 rounded-md shadow-md py-6 px-8">
            <p className="text-lg text-gray-100">
              A project that is based on creating awareness for businesses
              around Sierra Leone and making their online presence possible.
              CUBE restaurant, a local restaurant was chosen for which this food
              order and delivery website were built.
            </p>
          </div>
          <div className="mt-8">
            <ul className="flex justify-end">
              <li className="text-lg mx-3">HTML & CSS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Portfolio Item */}
      <div className="flex mt-16">
        <div className="w-2/5 -mr-40 z-10">
          <div className="mt-10">
            <h1 className="text-3xl logo-text">Online Learning Portal</h1>
          </div>
          <div className="portfolio-bg-popover mt-4 rounded-md shadow-md py-6 px-8">
            <p className="text-lg text-gray-100">
              This project was a final semester project in my 3rd year at
              Limkokwing University of Creative Technology Sierra Leone.
              It&apos;s a full-stack application with signup and sign in
              functionalities.
            </p>
          </div>
          <div className="mt-6">
            <ul className="flex justify-start">
              <li className="text-lg mx-3">HTML & CSS</li>
              <li className="text-lg mx-3">Bootstrap</li>
              <li className="text-lg mx-3">PHP</li>
              <li className="text-lg mx-3">MySQL</li>
            </ul>
          </div>
        </div>
        <div className="w-3/5 rounded-md">
          <Image
            src={onlineLearningPortal}
            alt="Online Learning Portal"
            className="shadow-4xl rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
