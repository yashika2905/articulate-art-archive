import { Target } from "lucide-react";
import { Card } from "./ui/card";

export const Summary = () => {
  return (
    <section id="summary" className="animate-slide-up">
      <Card className="glass p-8 md:p-12 hover-lift">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Professional Summary</h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Results-driven marketing professional with expertise in Social Media Management, Content Creation, SEO, Business Development, and Data Analytics. I combine strategic thinking with creative execution to deliver measurable results. With a strong foundation in Economics and Mathematics, I bring analytical rigor to marketing strategies, driving brand growth and revenue optimization.
        </p>
      </Card>
    </section>
  );
};
