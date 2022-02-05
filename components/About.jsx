import React from "react";
import Image from "next/image";
import ArrowRight from "../components/icons/ArrowRight";

import amkam from "../public/images/Amkam.jpg";

const About = () => {
  return (
    <section className="mt-24 grid">
      <div className="flex justify-start items-center">
        <div className="w-full md:w-1/5">
          <h1 className="text-5xl font-semibold tracking-widest">About Me</h1>
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

      {/* About Amadu Kamara (Amkam) */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
        <div className="mr-16">
          <p className="leading-loose text-justify text-lg text-gray-300">
            Hello! My name is Amadu Kamara, commonly known as Samuel Amkam, I
            enjoy creating things and making businesses, organizations, etc..
            present on the internet. My interest in web development started back
            in 2017 when I first started hacking into Amazon's website, the
            website I admire the most — the hacking later turns out very
            interesting for me and it taught me a lot more about HTML & CSS!
          </p>
          <p className="mt-2 leading-loose text-justify text-lg text-gray-300">
            Fast-forward to today, and I've had the privilege of working at a
            software development company - a huge corporation, and an in-person
            web design and development Bootcamp in my incubator. My main focus
            these days is designing website, building web application,
            freelancing and teaching students how to design and develop a
            professional website.
          </p>
          <div className="mt-8 font-semibold tracking-wider">
            <h3 className="text-4xl logo-text">
              Here are few of my stacks I've been working with recently:
            </h3>
            <div className="grid grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4">
              <ul className="mr-8">
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    HTML & CSS
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    JavaScript
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    WordPress
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    Webflow
                  </span>
                </li>
              </ul>

              <ul className="mr-8">
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    React
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">Vue</span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    TailwindCSS
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    Bootstrap
                  </span>
                </li>
              </ul>

              <ul className="mr-8">
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">Node</span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    GraphQL
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    GitHub
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    Bootstrap
                  </span>
                </li>
              </ul>

              <ul>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    Adobe XD
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    Figma
                  </span>
                </li>
                <li className="flex my-3">
                  <ArrowRight />
                  <span className="text-sm md:text-lg text-gray-300">
                    Photoshop
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mr-32 pr-6 pb-4 rounded-md mt-4 w-10/12">
          <Image
            src={amkam}
            alt="Samuel Amkam"
            className="shadow-4xl rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
