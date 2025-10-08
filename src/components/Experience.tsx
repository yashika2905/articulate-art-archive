import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Social Media Marketing Manager",
    company: "CybraneX Technologies",
    period: "February 2025 - Present",
    responsibilities: [
      "Leading comprehensive social media management across multiple channels with research-based strategy, content planning, and cross-platform posting",
      "Driving business development and marketing initiatives for AI-based products, successfully acquiring new clients",
      "Developing and executing SEO strategies, brand identity initiatives, and integrated digital marketing campaigns",
      "Optimizing content strategy using Google Analytics, Google Search Console, MarketMuse, and Hemingway Editor",
      "Enhancing brand visibility through strategic blog creation and comprehensive On-page/Off-page SEO",
      "Leveraging AI platforms including Leonardo, Eleven Labs, HeyGen, and RunwayML for advanced content enhancement",
      "Managing paid advertising campaigns and social media strategies with VidIQ, Ubersuggest, and Confluence"
    ]
  },
  {
    title: "Content & Social Media Executive",
    company: "Witzeal Technologies",
    period: "November 2024 - February 2025",
    responsibilities: [
      "Created SEO-optimized, high-quality content using comprehensive keyword research and competitive analysis",
      "Managed off-page SEO initiatives, successfully increasing domain authority through guest posting and website optimization",
      "Developed content calendars, researched emerging social media trends, and executed brand visibility strategies"
    ]
  },
  {
    title: "Content Writer (Intern)",
    company: "Solutions Hub 360",
    period: "January 2020 - January 2021",
    responsibilities: [
      "Published SEO-optimized content across three company websites, consistently generating 2,500+ words monthly",
      "Led and mentored a team of 11 interns, providing comprehensive training on content strategies and engagement tracking",
      "Contributed to business development by improving operational processes and enhancing project execution"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Professional Experience</h2>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="glass hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <div className="space-y-2">
                <CardTitle className="text-2xl">{exp.title}</CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">▹</span>
                    <span>{resp}</span>
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
