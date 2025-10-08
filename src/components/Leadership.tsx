import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const leadership = [
  {
    title: "Cultural Secretary",
    organization: "Delhi University Students' Union (DUSU)",
    responsibilities: [
      "Organized and executed multiple large-scale cultural events across the university",
      "Managed cross-functional teams ensuring successful event delivery and coordination",
      "Developed leadership and organizational skills through community engagement"
    ]
  },
  {
    title: "Marketing Executive",
    organization: "Enactus Satyawati College",
    responsibilities: [
      "Spearheaded sales and promotion strategies for socially impactful products",
      "Supported underprivileged communities through strategic marketing initiatives",
      "Developed sustainable business models with social impact focus"
    ]
  }
];

export const Leadership = () => {
  return (
    <section id="leadership" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Leadership & Volunteering</h2>
      </div>
      
      <div className="space-y-6">
        {leadership.map((item, index) => (
          <Card key={index} className="glass hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <p className="text-lg font-semibold text-primary">{item.organization}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {item.responsibilities.map((resp, i) => (
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
