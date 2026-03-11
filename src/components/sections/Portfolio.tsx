
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, ShieldAlert, FolderKanban } from 'lucide-react';

export function Portfolio() {
  const portfolioLink = "https://drive.google.com/drive/folders/1R9A_cPyjDCPLi8wFtp_wIxYjwF4zPDeL?usp=drive_link";

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
            My creative journey through cinematic design and visual storytelling.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-background/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden group">
            <CardContent className="p-12 text-center">
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                <FolderKanban className="w-10 h-10" />
              </div>
              
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Portfolio / Works</h3>
              <p className="text-lg text-muted-foreground mb-8 font-body">
                Explore a comprehensive collection of my posters, branding, and digital creatives in my portfolio folder.
              </p>

              <div className="space-y-8">
                <Button size="lg" className="rounded-full h-16 px-12 text-lg font-bold bg-primary hover:bg-primary/90 gap-3 shadow-xl shadow-primary/20" asChild>
                  <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
                    View My Works
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>

                <div className="pt-8 border-t border-border/50">
                  <div className="flex items-start gap-3 text-left max-w-md mx-auto bg-secondary/30 p-4 rounded-xl border border-border/30">
                    <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      <span className="text-accent font-bold block mb-1">Security Note:</span>
                      All my works are accessible through the provided portfolio link. They are not displayed directly on the website to prevent unauthorized copying or misuse.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
