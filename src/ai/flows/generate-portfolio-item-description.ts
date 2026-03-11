'use server';
/**
 * @fileOverview An AI agent that generates brief, impactful, and cinematic descriptions for portfolio items.
 *
 * - generatePortfolioItemDescription - A function that handles the generation of portfolio item descriptions.
 * - GeneratePortfolioItemDescriptionInput - The input type for the generatePortfolioItemDescription function.
 * - GeneratePortfolioItemDescriptionOutput - The return type for the generatePortfolioItemDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const GeneratePortfolioItemDescriptionInputSchema = z.object({
  projectTitle: z.string().describe('The title of the portfolio project.'),
  projectType:
    z.string().describe('The type of the project, e.g., "Movie concept poster", "Social media creative", "Event branding".'),
  designStyle:
    z.string().describe('A comma-separated list of design styles that characterize the work, e.g., "Minimal, Cinematic, Dark aesthetic".'),
  imageDataUri: z
    .string()
    .optional()
    .describe(
      "An optional photo of the portfolio item, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GeneratePortfolioItemDescriptionInput = z.infer<
  typeof GeneratePortfolioItemDescriptionInputSchema
>;

// Output Schema
const GeneratePortfolioItemDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe(
      'A brief, impactful, and cinematic description for the portfolio item.'
    ),
});
export type GeneratePortfolioItemDescriptionOutput = z.infer<
  typeof GeneratePortfolioItemDescriptionOutputSchema
>;

// Wrapper function
export async function generatePortfolioItemDescription(
  input: GeneratePortfolioItemDescriptionInput
): Promise<GeneratePortfolioItemDescriptionOutput> {
  return generatePortfolioItemDescriptionFlow(input);
}

// Prompt definition
const portfolioDescriptionPrompt = ai.definePrompt({
  name: 'portfolioDescriptionPrompt',
  input: {schema: GeneratePortfolioItemDescriptionInputSchema},
  output: {schema: GeneratePortfolioItemDescriptionOutputSchema},
  prompt: `You are an expert creative director and copywriter specializing in generating brief, impactful, and cinematic descriptions for graphic design portfolio items.
The designer, Srihari Viji Ravichandran, has a distinct style characterized by:
- Minimal and Cinematic aesthetic
- Dark theme and movie poster inspired visuals
- Clean typography and bold visual storytelling
- Smooth scrolling animations

Your task is to craft a compelling, short description (1-2 sentences) for a portfolio item based on the provided details. The description should highlight the core idea, inspiration, and purpose, aligning with the designer's visual storytelling style.

Project Title: {{{projectTitle}}}
Project Type: {{{projectType}}}
Design Style Keywords: {{{designStyle}}}

{{#if imageDataUri}}
Here is an image of the portfolio item for additional context:
{{media url=imageDataUri}}
{{/if}}

Please provide a description that is:
- Brief (1-2 sentences)
- Impactful
- Cinematic in tone
- Explains the idea, inspiration, or purpose
- Aligns with the designer's dark, minimal, and visual storytelling aesthetic.`,
});

// Flow definition
const generatePortfolioItemDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePortfolioItemDescriptionFlow',
    inputSchema: GeneratePortfolioItemDescriptionInputSchema,
    outputSchema: GeneratePortfolioItemDescriptionOutputSchema,
  },
  async (input) => {
    const {output} = await portfolioDescriptionPrompt(input);
    return output!;
  }
);
