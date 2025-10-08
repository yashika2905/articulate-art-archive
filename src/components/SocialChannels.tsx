import { Instagram, Youtube, Linkedin, Radio } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const channels = [
  {
    icon: Instagram,
    name: "Urmi AI - Instagram",
    description: "AI Agentic Workflow platform automating calls, bookings, and WhatsApp updates. Managed end-to-end content strategy and brand positioning.",
    link: "https://www.instagram.com/urmi.ai/"
  },
  {
    icon: Instagram,
    name: "Cybranex - Instagram (Main Account)",
    description: "Primary company account focused on service/product promotion, building brand authenticity, reliability, and trust with the target audience.",
    link: "https://www.instagram.com/cybranex/"
  },
  {
    icon: Instagram,
    name: "CybranexLabs - Instagram (Educational)",
    description: "Educational content hub sharing insights, tutorials, and industry knowledge related to the company's core niches and expertise areas.",
    link: "https://www.instagram.com/cybranexlabs/"
  },
  {
    icon: Youtube,
    name: "Cybranex - YouTube",
    description: "Video content platform with an average SEO score of 4.8/5, ensuring optimal delivery, visibility, and audience reach.",
    link: "https://www.youtube.com/@cybranex"
  },
  {
    icon: Linkedin,
    name: "LinkedIn Presence",
    description: "Professional networking and B2B content strategy development for brand authority and industry thought leadership.",
    link: "https://share.google/T2yLsx6gh1XUwGRp2"
  }
];

export const SocialChannels = () => {
  return (
    <section id="social-channels" className="animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
          <Radio className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Managed Social Media Channels</h2>
      </div>
      
      <div className="space-y-4">
        {channels.map((channel, index) => (
          <Card key={index} className="glass hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <channel.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">{channel.name}</CardTitle>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={channel.link} target="_blank" rel="noopener noreferrer">
                    Visit Channel
                  </a>
                </Button>
              </div>
              <CardDescription className="text-sm leading-relaxed mt-2">
                {channel.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
