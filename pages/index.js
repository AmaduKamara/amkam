import Head from "next/head";

import Link from "next/link";

import ArrowTop from "../components/icons/ArrowTop";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolios from "../components/Portfolios";

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
        {/* Hero Section Component import */}
        <Hero />

        {/* About Section component import */}
        <About />

        {/* Portfolio Setion */}
        <Portfolios />

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
      </main>
    </div>
  );
}
