import { portfolioData } from "@/lib/data";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero personalInfo={portfolioData.personalInfo} />
      <About personalInfo={portfolioData.personalInfo} />
      <Skills skills={portfolioData.skills} />
      <Experience experience={portfolioData.experience} />
      <Projects projects={portfolioData.projects} />
      <Achievements achievements={portfolioData.achievements} />
      <Testimonials testimonials={portfolioData.testimonials} />
      <Contact personalInfo={portfolioData.personalInfo} />
    </main>
  );
}