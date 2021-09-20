import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Check from "../components/icons/Check";
import ArrowRight from "../components/icons/ArrowRight";

import heroImage from "../public/images/Amadu Kamara.jpg";
import amkam from "../public/images/Amkam.jpg";
import ArrowTop from "../components/icons/ArrowTop";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Amkam</title>
        <meta
          name="description"
          content="Amadu Kamara's portfolio site created using React's Nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-16">
        {/* Hero Setction */}
        <section className="grid grid-cols-1 md:grid-cols-2 my-12">
          <div className="pt-10 order-last px-12 md:px-0">
            <h4 className="logo-text text-2xl">Hello!</h4>
            <h1 className="font-semibold h-text-color text-4xl md:text-5xl lg:text-7xl my-2">
              I'm Amadu Kamara
            </h1>
            <ul className="mt-5">
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
                <span className="text-xl md:text-2xl text-gray-300">Web designer</span>
              </li>
              <li className="flex items-center mb-5 text-xl">
                <div className="bg-gray-100 h-text-color rounded-full p-2 mr-4 text-2xl">
                  <Check />
                </div>
                <span className="text-xl md:text-2xl text-gray-300">UI/UX designer</span>
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

        {/* About Section */}
        <section className="mt-24 grid">
          <div className="flex justify-start items-center">
            <div className="w-full md:w-1/5">
              <h1 className="text-5xl font-semibold">About Me</h1>
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
                Hello! My name is Amadu Kamara, commonly known as Samuel Amkam,
                I enjoy creating things and making businesses, organizations,
                etc.. present on the internet. My interest in web development
                started back in 2017 when I first started hacking into Amazon's
                website, the website I admire the most — the hacking later turns
                out very interesting for me and it taught me a lot more about
                HTML & CSS!
              </p>
              <p className="mt-2 leading-loose text-justify text-lg text-gray-300">
                Fast-forward to today, and I've had the privilege of working at
                a software development company - a huge corporation, and an
                in-person web design and development Bootcamp in my incubator.
                My main focus these days is designing website, building web
                application, freelancing and teaching students how to design and
                develop a professional website.
              </p>
              <div className="mt-8 font-semibold tracking-wider">
                <h3 className="text-3xl">
                  Here are few of my stacks I've been working with recently:
                </h3>
                <div className="grid grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4">

                  <ul className="mr-8">
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">HTML & CSS</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">JavaScript</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">WordPress</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Webflow</span>
                    </li>
                  </ul>

                  <ul className="mr-8">
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">React</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Vue</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">TailwindCSS</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Bootstrap</span>
                    </li>
                  </ul>

                  <ul className="mr-8">
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Node</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">GraphQL</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">GitHub</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Bootstrap</span>
                    </li>
                  </ul>

                  <ul>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Adobe XD</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Figma</span>
                    </li>
                    <li className="flex my-3">
                      <ArrowRight />
                      <span className="text-sm md:text-lg text-gray-300">Photoshop</span>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <div
              className="mr-32 pr-6 pb-4 rounded-md mt-4 w-10/12"
            >
              <Image
                src={amkam}
                alt="Samuel Amkam"
                className="shadow-4xl rounded-md"
              />
            </div>

          </div>
        </section>

        {/* Portfolio Setion */}
        <section className="mt-24">
          <div className="flex justify-start items-center">
            <div className="w-1/5">
              <h1 className="text-5xl font-semibold">Portfolio</h1>
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
        </section>

        {/* Footer Section */}
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
              <p className="leading-loose text-justify text-lg text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis amet ex quo repellat obcaecati nemo eveniet quam elit.
                Officiis amet ex quo repellat obcaecati nemo eveniet quam
              </p>
            </div>
            <div className="1/4 mr-12">
              <h3 className="text-3xl font-semibold">Contacts</h3>
              <ul>
                <li className="text-gray-3">amaduskamara@gmail.com</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h3 className="text-3xl font-semibold">Social Media</h3>
              <ul>
                <li className="text-gray-3">LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex justify-center w-full">
            <div>
              <button
                type="button"
                className="text-white text-xl btn-border rounded-md py-5 px-10 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110"
              >
                Send Me Message
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link
              href="/"
              className="px-5 py-3 bg-btn rounded shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <ArrowTop />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
