
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const portfolioItems = [
  {
    id: 1,
    title: 'Movie Concept Poster',
    category: 'Poster Design',
    description: 'A cinematic concept exploring minimalist storytelling for a psychological thriller.',
    image: PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl,
    hint: 'movie poster design'
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    category: 'Graphic Design',
    description: 'Bold visual strategy for a digital brand launch across multiple platforms.',
    image: PlaceHolderImages.find(img => img.id === 'portfolio-4')?.imageUrl,
    hint: 'social media creative'
  },
  {
    id: 3,
    title: 'Election Awareness',
    category: 'Poster Design',
    description: 'Campaign poster focusing on clean typography to drive community engagement.',
    image: PlaceHolderImages.find(img => img.id === 'portfolio-2')?.imageUrl,
    hint: 'minimalist awareness'
  },
  {
    id: 4,
    title: 'Aesthetic Edit',
    category: 'Creative Edits',
    description: 'Experimental composition using layered lighting and cinematic color grading.',
    image: PlaceHolderImages.find(img => img.id === 'portfolio-6')?.imageUrl,
    hint: 'cinematic edit'
  },
  {
    id: 5,
    title: 'College Event Branding',
    category: 'Graphic Design',
    description: 'Full identity design for a national-level college technology symposium.',
    image: PlaceHolderImages.find(img => img.id === 'portfolio-3')?.imageUrl,
    hint: 'event poster'
  },
  {
    id: 6,
    title: 'Concept Visual',
    category: 'Creative Edits',
    description: 'Surrealist visual storytelling piece inspired by modern cinematic directors.',
    image: PlaceHolderImages.find(img => img.id === 'portfolio-5')?.imageUrl,
    hint: 'minimalist design'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Portfolio <span className="text-primary">Showcase</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A curated collection of my work spanning poster design, branding, and cinematic visual experiments.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background border border-border">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary">All Work</TabsTrigger>
              <TabsTrigger value="Poster Design" className="data-[state=active]:bg-primary">Poster Design</TabsTrigger>
              <TabsTrigger value="Graphic Design" className="data-[state=active]:bg-primary">Graphic Design</TabsTrigger>
              <TabsTrigger value="Creative Edits" className="data-[state=active]:bg-primary">Creative Edits</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => <PortfolioCard key={item.id} item={item} />)}
            </div>
          </TabsContent>

          {['Poster Design', 'Graphic Design', 'Creative Edits'].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter(item => item.category === category)
                  .map((item) => <PortfolioCard key={item.id} item={item} />)}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="rounded-full gap-2 group border-primary text-primary hover:bg-primary/10" asChild>
            <a href="https://www.behance.net/berrywine" target="_blank" rel="noopener noreferrer">
              View Full Portfolio on Behance
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: any }) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-card border border-border shadow-lg portfolio-card-hover">
      <Image
        src={item.image || 'https://placehold.co/600x800'}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        data-ai-hint={item.hint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-primary text-xs font-headline uppercase tracking-widest mb-1">{item.category}</p>
          <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors mb-4">
                  <Info className="w-4 h-4" />
                  View Process
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-background border-border text-foreground p-4 max-w-[250px]">
                <p>{item.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button size="sm" variant="accent" className="w-full bg-accent text-accent-foreground font-semibold rounded-lg" asChild>
             <a href="https://www.behance.net/berrywine" target="_blank" rel="noopener noreferrer">View Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
