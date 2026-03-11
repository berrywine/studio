
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, ShieldAlert, FolderKanban, Globe } from 'lucide-react';

export function Portfolio() {
  const driveLink = "https://drive.google.com/drive/folders/1R9A_cPyjDCPLi8wFtp_wIxYjwF4zPDeL?usp=drive_link";
  const behanceLink = "https://www.behance.net/berrywine";

  return (
    <section id="portfolio" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Cinematic background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
            Portfolio <span className="text-primary">Showcase</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            My creative journey through cinematic design and visual storytelling across multiple platforms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden group">
            <CardContent className="p-12 text-center">
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                <FolderKanban className="w-10 h-10" />
              </div>
              
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Portfolio / Works</h3>
              <p className="text-lg text-muted-foreground mb-10 font-body max-w-2xl mx-auto">
                Explore a comprehensive collection of my posters, branding, and digital creatives. Choose your preferred platform to view my work.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold bg-primary hover:bg-primary/90 gap-3 shadow-xl shadow-primary/20 w-full sm:w-auto" asChild>
                  <a href={driveLink} target="_blank" rel="noopener noreferrer">
                    Google Drive
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-bold border-accent text-accent hover:bg-accent/10 gap-3 w-full sm:w-auto" asChild>
                  <a href={behanceLink} target="_blank" rel="noopener noreferrer">
                    Behance Profile
                    <Globe className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              <div className="pt-8 border-t border-border/50">
                <div className="flex items-start gap-3 text-left max-w-md mx-auto bg-secondary/30 p-4 rounded-xl border border-border/30">
                  <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    <span className="text-accent font-bold block mb-1">Security Note:</span>
                    All my works are accessible through the provided portfolio links. They are not displayed directly on the website to prevent unauthorized copying or misuse.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
