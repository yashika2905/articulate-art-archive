import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 animate-pulse-glow" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Profile Photo Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-6xl font-bold gradient-text">
                  YA
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-fade-in">
            YASHIKA AGARWAL
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Marketing Strategist | Content Creator | SEO Specialist | Business Development Professional
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="outline" className="gap-2 hover-lift" asChild>
              <a href="tel:8882006988">
                <Phone className="w-4 h-4" />
                8882006988
              </a>
            </Button>
            
            <Button variant="outline" className="gap-2 hover-lift" asChild>
              <a href="mailto:yashika2905@gmail.com">
                <Mail className="w-4 h-4" />
                yashika2905@gmail.com
              </a>
            </Button>
            
            <Button variant="outline" className="gap-2 hover-lift" asChild>
              <a href="https://www.linkedin.com/in/yashika-agarwal" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            
            <Button variant="outline" className="gap-2 hover-lift">
              <MapPin className="w-4 h-4" />
              Delhi, India
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
