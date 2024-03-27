'use client';
import Hero from "@/components/Hero";
import Header from "../components/Header";
import { NextPage } from "next";
import Head from "next/head";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#9370DB]/40">
      <Head>
        <title>Mitch's Portfolio</title>
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

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover transition duration-500 ease-in-out"
              src="/aboutPic.JPG" 
              alt="" 
            />
          </div>
        </footer>
      </Link>

    </div>
  );
};

export default Home;