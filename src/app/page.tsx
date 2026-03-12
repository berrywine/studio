import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Experience } from '@/components/sections/Experience';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { AITool } from '@/components/sections/AITool';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <AITool />
      <Contact />
      
      <footer className="py-12 border-t border-border bg-background">
        <div className="container px-4 text-center">
          <p className="font-headline font-bold text-lg mb-2">Srihari Viji Ravichandran</p>
          <p className="text-muted-foreground text-sm font-body mb-6">Visual Storyteller & Graphic Designer</p>
          <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            © 2025 Srihari Viji Ravichandran. All Rights Reserved.
          </p>
        </div>
      </footer>
      <Toaster />
    </main>
  );
}
