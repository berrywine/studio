import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowDown, Globe, Github, FileText } from 'lucide-react';

export function Hero() {
  const driveLink = "https://drive.google.com/drive/folders/1R9A_cPyjDCPLi8wFtp_wIxYjwF4zPDeL?usp=drive_link";
  const resumeLink = "https://drive.google.com/drive/folders/1x53THq5xpswL95VuMl6totcvsEYzcrr3?usp=drive_link";
  const behanceLink = "https://www.behance.net/berrywine";
  const githubLink = "https://github.com/berrywine";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent z-0" />
      </div>

      <div className="container relative z-20 px-4 text-center">
        <h2 className="font-headline text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Graphic Designer | Poster Artist
        </h2>
        <h1 className="font-headline text-5xl md:text-8xl font-black mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Srihari Viji <br /> <span className="text-accent text-gradient">Ravichandran</span>
        </h1>
        <p className="font-body text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 italic animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          "Designing visuals that tell stories."
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8" asChild>
            <a href="#portfolio">View Portfolio</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 px-8" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-accent text-accent hover:bg-accent/10 px-8 gap-2" asChild>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4" />
              View Resume
            </a>
          </Button>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Button size="lg" variant="ghost" className="rounded-full hover:bg-white/10" asChild>
              <a href={driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Works
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full hover:bg-white/10" asChild>
              <a href={behanceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Behance
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full hover:bg-white/10" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}
