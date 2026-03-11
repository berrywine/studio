import { Calendar, Award, Users, BookOpen } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "President / Lead Designer",
      org: "College Design Club",
      description: "Organized and conceptualized creative design events and poster campaigns for university-wide festivals.",
      icon: <Users className="w-5 h-5" />,
      tag: "Leadership"
    },
    {
      title: "Lead Creative",
      org: "Awareness Design Projects",
      description: "Worked on impactful awareness design projects including election awareness poster campaigns and social advocacy.",
      icon: <Award className="w-5 h-5" />,
      tag: "Impact"
    },
    {
      title: "Visual Strategist",
      org: "Cinema-Inspired Poster Concepts",
      description: "Developed and curated a collection of cinema-inspired poster concepts, pushing the boundaries of visual storytelling.",
      icon: <BookOpen className="w-5 h-5" />,
      tag: "Creativity"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {exp.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-headline text-xl font-bold">{exp.title}</h3>
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {exp.tag}
                      </span>
                    </div>
                    <p className="text-accent text-sm font-semibold mb-3">{exp.org}</p>
                    <p className="text-muted-foreground font-body leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">
              Experience & <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-body leading-relaxed">
              Beyond technical skills, I am deeply involved in community building and leading creative teams. I believe design is a collaborative language that thrives when shared and nurtured.
            </p>
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
               <div className="relative z-10">
                 <p className="font-headline text-xl italic text-foreground mb-4 leading-relaxed">
                   "Stubborn by vision, loyal by design - a good designer"
                 </p>
                 <p className="text-primary font-bold tracking-widest uppercase text-xs">
                   -- Srihari Viji Ravichandran
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
