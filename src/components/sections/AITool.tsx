
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { generatePortfolioItemDescription } from '@/ai/flows/generate-portfolio-item-description';
import { useToast } from '@/hooks/use-toast';

export function AITool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult('');

    const formData = new FormData(e.currentTarget);
    const input = {
      projectTitle: formData.get('title') as string,
      projectType: formData.get('type') as string,
      designStyle: formData.get('style') as string,
    };

    try {
      const { description } = await generatePortfolioItemDescription(input);
      setResult(description);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate description. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary/20 border-primary/20 shadow-2xl overflow-hidden">
            <div className="bg-primary/10 p-4 flex items-center justify-center gap-2 border-b border-primary/20">
              <Sparkles className="text-primary w-5 h-5 animate-pulse" />
              <span className="font-headline font-bold text-sm tracking-widest uppercase">AI Creative Assistant</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <CardContent className="p-8 border-r border-border">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="font-headline">Script Your Story</CardTitle>
                  <CardDescription className="font-body">
                    Generate cinematic descriptions for your design items. Perfect for recruiters and portfolio showcases.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input id="title" name="title" placeholder="e.g., Midnight Silence" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Project Type</Label>
                    <Input id="type" name="type" placeholder="e.g., Movie Concept Poster" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="style">Design Style</Label>
                    <Input id="style" name="style" placeholder="e.g., Minimal, Dark, Cinematic" required className="bg-background" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    Generate Cinematic Script
                  </Button>
                </form>
              </CardContent>

              <div className="p-8 flex flex-col justify-center bg-primary/5">
                <div className="text-center mb-4">
                  <h4 className="font-headline text-sm font-bold text-primary tracking-widest uppercase">Result</h4>
                </div>
                <div className="min-h-[150px] flex items-center justify-center text-center p-6 border-2 border-dashed border-primary/20 rounded-xl relative">
                  {loading ? (
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                      <p className="text-sm text-muted-foreground animate-pulse">Crafting cinematic description...</p>
                    </div>
                  ) : result ? (
                    <div className="space-y-4">
                      <p className="text-lg font-body leading-relaxed italic text-foreground">"{result}"</p>
                      <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-primary hover:text-primary hover:bg-primary/10">
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? 'Copied' : 'Copy Description'}
                      </Button>
                    </div>
                  ) : (
                    <p className="text-muted-foreground italic">Your cinematic project description will appear here...</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
