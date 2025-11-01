// import Image from "next/image";

import AboutUs from "@/components/AboutUs/AboutUs";
import Hero from "@/components/Hero/Hero";
import ProjectsTeaser from "@/components/Teasers/ProjectsBrief";
import ServicesTeaser from "@/components/Teasers/ServicesStripes";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesTeaser />
      <ProjectsTeaser />
    </>
  );
}
