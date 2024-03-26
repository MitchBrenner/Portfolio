'use client';
import Hero from "@/components/Hero";
import Header from "../components/Header";
import { NextPage } from "next";
import Head from "next/head";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Mitchy's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}

    </div>
  );
};

export default Home;