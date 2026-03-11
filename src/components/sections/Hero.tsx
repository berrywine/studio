
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, ArrowDown, Globe } from 'lucide-react';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const driveLink = "https://drive.google.com/drive/folders/1R9A_cPyjDCPLi8wFtp_wIxYjwF4zPDeL?usp=drive_link";
  const behanceLink = "https://www.behance.net/berrywine";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Filter */}
      <div className="absolute inset-0 z-0">
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover opacity-40"
            priority
            data-ai-hint={heroImg.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
        <div className="absolute inset-0 bg-black/20 z-0" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 text-center">
        <h2 className="font-headline text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Graphic Designer | Poster Artist
        </h2>
        <h1 className="font-headline text-5xl md:text-8xl font-black mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Srihari Viji <br /> <span className="text-accent">Ravichandran</span>
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
          
          <div className="flex gap-2">
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
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}
