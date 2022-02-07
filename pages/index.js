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
        
      </main>
    </div>
  );
}
