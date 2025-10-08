import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import profilePic from "./yashika.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 animate-pulse-glow" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto animate-slide-up">
          {/* Left Section - Profile Image */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
              <img
                src={profilePic}
                alt="Yashika Agarwal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="text-center md:text-left space-y-6 md:space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-fade-in">
              YASHIKA AGARWAL
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Marketing Strategist | Content Creator | SEO Specialist | Business
              Development Professional
            </p>

            <div
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
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
                <a
                  href="https://www.linkedin.com/in/yashika-agarwal-693b6a208"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
      </div>
    </section>
  );
};
