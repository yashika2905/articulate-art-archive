import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Portfolio } from "@/components/Portfolio";
import { SocialChannels } from "@/components/SocialChannels";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-20">
        <Summary />
        <Portfolio />
        <SocialChannels />
        <Experience />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
