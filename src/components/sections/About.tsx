
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Film, Share2, Layers, Zap } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'Poster Designing', icon: <Film className="w-4 h-4" /> },
    { name: 'Graphic Designing', icon: <Palette className="w-4 h-4" /> },
    { name: 'Photo Editing', icon: <Layers className="w-4 h-4" /> },
    { name: 'Concept Development', icon: <Zap className="w-4 h-4" /> },
    { name: 'Visual Storytelling', icon: <Share2 className="w-4 h-4" /> },
  ];

  const tools = ['Photoshop', 'Photopea', 'Canva', 'Adobe Suite Workflow'];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">
              A Cinematic Approach to <span className="text-primary text-gradient">Visual Narrative</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-body">
              <p>
                Srihari Viji Ravichandran is a passionate graphic designer and poster artist who loves transforming ideas into visually striking designs. Inspired by cinema, storytelling, and strong visual narratives, he focuses on creating impactful posters, digital designs, and creative edits.
              </p>
              <p>
                Currently active in college design communities, he has experience working on event branding, awareness campaigns, poster concepts, and creative visual storytelling.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-secondary/50 border-none shadow-xl overflow-hidden group">
              <CardContent className="p-8">
                <h3 className="font-headline text-xl font-semibold mb-6 flex items-center gap-2">
                  <Palette className="text-primary" /> Core Competencies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill.name} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm bg-background border-border hover:border-primary transition-colors cursor-default flex items-center gap-2"
                    >
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 border-none shadow-xl overflow-hidden group">
              <CardContent className="p-8">
                <h3 className="font-headline text-xl font-semibold mb-6 flex items-center gap-2">
                  <Layers className="text-accent" /> Creative Arsenal
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <Badge 
                      key={tool} 
                      className="px-4 py-2 text-sm bg-accent text-accent-foreground hover:bg-accent/90 transition-colors cursor-default"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
