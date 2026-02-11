import { Hero } from "@/components/sections/hero";
import { ProfileSection } from "@/components/sections/profile";
import { SkillsSection } from "@/components/sections/skills";
import { SanpoSection } from "@/components/sections/sanpo";
import { WorksTeaser } from "@/components/sections/works-teaser";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ProfileSection />
      <SkillsSection />
      <SanpoSection />
      <WorksTeaser />
      <Contact />
    </div>
  );
}
