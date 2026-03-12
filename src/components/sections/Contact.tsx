'use client';

import { Mail, ExternalLink, Linkedin, Github, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  const driveLink = "https://drive.google.com/drive/folders/1R9A_cPyjDCPLi8wFtp_wIxYjwF4zPDeL?usp=drive_link";
  const behanceLink = "https://www.behance.net/berrywine";
  const linkedinLink = "https://www.linkedin.com/in/srihari-viji-ravichandran-3b9b7928b";
  const githubLink = "https://github.com/berrywine";

  const contactLinks = [
    {
      label: "Email Me",
      value: "sriharirroverhere@gmail.com",
      href: "mailto:sriharirroverhere@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "text-primary",
      hover: "group-hover:bg-primary"
    },
    {
      label: "View Portfolio",
      value: "Works",
      href: driveLink,
      icon: <ExternalLink className="w-5 h-5" />,
      color: "text-primary",
      hover: "group-hover:bg-primary"
    },
    {
      label: "Behance",
      value: "berrywine",
      href: behanceLink,
      icon: <Globe className="w-5 h-5" />,
      color: "text-accent",
      hover: "group-hover:bg-accent"
    },
    {
      label: "Professional",
      value: "LinkedIn",
      href: linkedinLink,
      icon: <Linkedin className="w-5 h-5" />,
      color: "text-primary",
      hover: "group-hover:bg-primary"
    },
    {
      label: "Code",
      value: "GitHub",
      href: githubLink,
      icon: <Github className="w-5 h-5" />,
      color: "text-accent",
      hover: "group-hover:bg-accent"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-body leading-relaxed max-w-2xl mx-auto">
            Open to collaborations, freelance projects, and creative design opportunities. If you have a story to tell, I'm here to design it.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                target={link.href.startsWith('mailto') ? undefined : "_blank"} 
                rel="noopener noreferrer" 
                className="group"
              >
                <Card className="bg-secondary/20 hover:bg-secondary/40 border-border transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center ${link.color} ${link.hover} group-hover:text-white transition-all duration-300 mb-4`}>
                      {link.icon}
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{link.label}</p>
                    <p className="text-lg font-headline font-semibold group-hover:text-primary transition-colors">{link.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
