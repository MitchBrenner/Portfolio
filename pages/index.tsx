'use client';
import Hero from "@/components/Hero";
import Header from "../components/Header";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "@/components/About";
import ExperiencePage from "@/components/ExperiencePage";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, Technology, PageInfo, Social, Project } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { urlFor } from "@/sanity";


type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  socials: Social[],
  skills: Technology[],
  projects: Project[]
}

const Home = ({ pageInfo, experiences, socials, skills, projects }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#9370DB]/40">
      <Head>
        <title>Mitch's Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* <section id="experience" className="snap-center">
        <ExperiencePage experiences={experiences}/>
      </section> */}

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>

      {/* <section id="contact" className="snap-center">
        <ContactMe />
      </section> */}

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover transition duration-500 ease-in-out"
              src={urlFor(pageInfo.profilePic).url()} 
            />
          </div>
        </footer>
      </Link>

    </div>
  );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();
  const skills: Technology[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      experiences,
      socials,
      skills,
      projects
    },

    revalidate: 10
  };

}