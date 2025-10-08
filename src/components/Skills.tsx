import { Lightbulb, TrendingUp, Palette, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    icon: Lightbulb,
    title: "Business & Strategy",
    skills: [
      "Market Research & Analysis",
      "Competitor Analysis",
      "Stakeholder Management",
      "Strategic Planning & Execution",
      "Business Development"
    ]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    skills: [
      "Content Strategy Development",
      "Keyword Research & Optimization",
      "Web Analytics (GA4, GSC)",
      "On-page & Off-page SEO",
      "Paid Advertising Campaigns"
    ]
  },
  {
    icon: Palette,
    title: "Content & Social Media",
    skills: [
      "Content Creation & Copywriting",
      "Graphic Design",
      "WordPress Management",
      "Social Media Campaign Execution",
      "Video Content Production"
    ]
  },
  {
    icon: Wrench,
    title: "Technical Tools",
    skills: [
      "Microsoft Office Suite",
      "Google Workspace",
      "CRM Tools (Zoho, HubSpot)",
      "SQL & Data Analysis",
      "AI Content Tools"
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
          <Wrench className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Core Skills & Expertise</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="glass hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary font-bold">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
