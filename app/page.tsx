'use client';
import Hero from "@/components/Hero";
import Header from "../components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white">
      <Head>
        <title>Mitchy's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero">

        <Hero />

      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
};

export default Home;