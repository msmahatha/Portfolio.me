'use server';
/**
 * @fileOverview An AI-powered tool to generate creative section titles.
 *
 * - generateTitle - A function that generates a title based on a context.
 * - GenerateTitleInput - The input type for the generateTitle function.
 * - GenerateTitleOutput - The return type for the generateTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTitleInputSchema = z.object({
  context: z.string().describe('The context for which to generate a title (e.g., "About Me", "My Work").'),
});
export type GenerateTitleInput = z.infer<typeof GenerateTitleInputSchema>;

const GenerateTitleOutputSchema = z.object({
  title: z.string().describe('A creative and short title.'),
});
export type GenerateTitleOutput = z.infer<typeof GenerateTitleOutputSchema>;

export async function generateTitle(input: GenerateTitleInput): Promise<GenerateTitleOutput> {
  return generateTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTitlePrompt',
  input: {schema: GenerateTitleInputSchema},
  output: {schema: GenerateTitleOutputSchema},
  prompt: `You are a creative copywriter for a portfolio website.
  Generate a short, compelling, and creative section title based on the following context.
  The title should be 2-3 words long. Do not use quotes.
  
  Context: "{{{context}}}"
  
  Example for "About Me":
  - My Story
  - Who I Am
  - Behind the Code

  Example for "What I Do":
  - My Focus
  - How I Help
  - My Services
  
  Generate one title for the context: "{{{context}}}"`,
});

const generateTitleFlow = ai.defineFlow(
  {
    name: 'generateTitleFlow',
    inputSchema: GenerateTitleInputSchema,
    outputSchema: GenerateTitleOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
