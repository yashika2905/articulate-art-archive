import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const education = [
  {
    degree: "Master of Arts (M.A.) in Economics",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "Expected 2026"
  },
  {
    degree: "Bachelor of Arts (B.A.) in Economics & Mathematics",
    institution: "Satyawati College, Delhi University",
    year: "January 2023"
  },
  {
    degree: "Higher Secondary Education (XII - Commerce with Mathematics)",
    institution: "Ryan International School | CBSE",
    year: "January 2020"
  }
];

export const Education = () => {
  return (
    <section id="education" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Education</h2>
      </div>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="glass hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <CardTitle className="text-xl">{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground font-medium">{edu.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
