'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, ExternalLink, Send, CheckCircle2, Globe, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const driveLink = "https://drive.google.com/drive/folders/1R9A_cPyjDCPLi8wFtp_wIxYjwF4zPDeL?usp=drive_link";
  const behanceLink = "https://www.behance.net/berrywine";
  const linkedinLink = "https://www.linkedin.com/in/srihari-viji-ravichandran-3b9b7928b";
  const githubLink = "https://github.com/berrywine";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
              Let's Create <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-body leading-relaxed max-w-md">
              Open to collaborations, freelance projects, and creative design opportunities. If you have a story to tell, I'm here to design it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <a href="mailto:sriharirroverhere@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-headline font-semibold group-hover:text-primary transition-colors">sriharirroverhere@gmail.com</p>
                </div>
              </a>

              <a href={driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">View Portfolio</p>
                  <p className="text-lg font-headline font-semibold group-hover:text-primary transition-colors">Works</p>
                </div>
              </a>

              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Professional</p>
                  <p className="text-lg font-headline font-semibold group-hover:text-primary transition-colors">LinkedIn</p>
                </div>
              </a>

              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Code</p>
                  <p className="text-lg font-headline font-semibold group-hover:text-accent transition-colors">GitHub</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-secondary/20 backdrop-blur-sm p-8 rounded-3xl border border-border shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for your interest. I will review your message and respond as soon as possible.</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" required className="bg-background focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="bg-background focus:ring-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" required className="bg-background focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background focus:ring-primary" required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2 h-12 transition-all hover:scale-[1.02]" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Send className="w-4 h-4" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
