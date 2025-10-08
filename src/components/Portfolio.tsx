import { FileText, Video, FileCode, TrendingUp, Users, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    icon: FileText,
    title: "Articles & Blog Portfolio",
    description: "SEO-optimized, readability-enhanced articles and blogs. AI-free content crafted for maximum engagement and search visibility.",
    link: "https://drive.google.com/drive/u/0/folders/1iggaaWrHI2dzio8Dqb2xlA9F_ZHmTqDJ",
    linkText: "View Work Samples"
  },
  {
    icon: Video,
    title: "Content Creator Reels",
    description: "Professional Instagram reels showcasing content creation skills, storytelling, and brand engagement strategies.",
    links: [
      { url: "https://www.instagram.com/reel/DONpvxwD_Aa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", text: "View Reel 1" },
      { url: "https://www.instagram.com/reel/DEFwjAHyXc1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", text: "View Reel 2" }
    ]
  },
  {
    icon: Video,
    title: "Personal Reels Portfolio",
    description: "Collection of self-created reels demonstrating versatility in content formats, trends, and creative storytelling.",
    link: "https://drive.google.com/drive/folders/1U9AU_ZOFkmwd_ug3_pbhfQYuofSNKiTZ?usp=drive_link",
    linkText: "View Self Reels"
  },
  {
    icon: FileCode,
    title: "Strategic Content Plan",
    description: "Comprehensive multi-channel content strategy based on product research, target audience analysis, and resource optimization for efficient growth.",
    link: "https://drive.google.com/file/d/1U6r_PelHAQAuyBdlqvIwN35PMhM2rHC_/view?usp=drive_link",
    linkText: "View Content Plan"
  },
  {
    icon: TrendingUp,
    title: "Multi-Platform Content Research",
    description: "Strategic framework for content distribution across platforms with guidelines and approaches ensuring maximum brand visibility and engagement.",
    link: "https://www.mermaidchart.com/app/projects/1a911c39-4dc4-40dc-b8e8-c11f903b8f34/diagrams/dec9be7b-8cb1-4cd3-af98-dbd6434e0cdc/version/v0.1/edit",
    linkText: "View Research Framework"
  },
  {
    icon: Workflow,
    title: "Customer Journey & Conversion Workflow",
    description: "Integrated marketing and business development framework with detailed customer journey mapping and conversion optimization strategies.",
    link: "https://www.mermaidchart.com/app/projects/1a911c39-4dc4-40dc-b8e8-c11f903b8f34/diagrams/c84bf9ca-d0a2-411c-aae4-00c66663ae4f/version/v0.1/edit",
    linkText: "View Workflow"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Featured Work & Portfolio Samples</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="glass hover-lift group overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <project.icon className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform" />
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex flex-col gap-2">
              {project.link && (
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkText}
                  </a>
                </Button>
              )}
              {project.links && project.links.map((link, i) => (
                <Button key={i} variant="outline" className="w-full gap-2" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
