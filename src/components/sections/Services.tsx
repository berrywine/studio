
import { CheckCircle2, Monitor, Layout, PenTool, Image as ImageIcon, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      title: "Poster Designing",
      description: "Cinematic, event, and awareness posters that grab attention and tell a story.",
      icon: <ImageIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: "Graphic Designing",
      description: "Creative visuals for digital platforms, branding, and comprehensive campaigns.",
      icon: <Layout className="w-8 h-8 text-accent" />,
    },
    {
      title: "Creative Editing",
      description: "High-end photo manipulation and cinematic visual compositions.",
      icon: <PenTool className="w-8 h-8 text-primary" />,
    },
    {
      title: "Event Visual Design",
      description: "Full event branding packages from invitations to large-scale banners.",
      icon: <Megaphone className="w-8 h-8 text-accent" />,
    },
    {
      title: "Social Media Visuals",
      description: "Platform-optimized creatives that align with your brand's unique voice.",
      icon: <Monitor className="w-8 h-8 text-primary" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/10">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">What I <span className="text-primary">Offer</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Professional design services tailored to your vision, with a focus on cinematic quality and impactful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-background border-border hover:border-primary transition-all duration-300 shadow-lg group">
              <CardHeader>
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Professional Quality
                  </li>
                  <li className="flex items-center gap-2 text-sm text-accent font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Timely Delivery
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-xl text-center">
            <h3 className="font-headline text-xl font-bold mb-2">Custom Project?</h3>
            <p className="text-muted-foreground text-sm mb-6">Have something unique in mind that isn't listed here?</p>
            <a href="#contact" className="text-primary font-bold hover:underline">Let's discuss your idea</a>
          </div>
        </div>
      </div>
    </section>
  );
}
