import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="animate-slide-up pb-20">
      <Card className="glass bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 text-center hover-lift">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Let's Connect!</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ready to collaborate on your next project? Let's create something amazing together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" asChild>
            <a href="mailto:yashika2905@gmail.com">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </Button>
          <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" asChild>
            <a href="tel:8882006988">
              <Phone className="w-5 h-5" />
              Call Me
            </a>
          </Button>
        </div>
      </Card>
    </section>
  );
};
