'use server';
/**
 * @fileOverview An AI-powered tool to generate all dynamic content for the About Page.
 *
 * - generateAboutPageContent - A function that creates a compelling bio and section titles.
 * - GenerateAboutPageContentInput - The input type for the function.
 * - GenerateAboutPageContentOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutPageContentInputSchema = z.object({
  name: z.string().describe('The name of the profile owner.'),
  title: z.string().describe('The current title of the profile.'),
  skills: z.record(z.array(z.string())).describe('A map of skill categories to skill lists.'),
  workExperience: z.array(z.object({
    role: z.string(),
    company: z.string(),
    bullets: z.array(z.string()).optional(),
  })).describe('List of work experiences.'),
});
export type GenerateAboutPageContentInput = z.infer<typeof GenerateAboutPageContentInputSchema>;

const GenerateAboutPageContentOutputSchema = z.object({
  aboutTitle: z.string().describe('A creative, short (2-3 words) title for the "About Me" section. Do not use quotes.'),
  whatIDoTitle: z.string().describe('A creative, short (2-3 words) title for the "What I Do" section. Do not use quotes.'),
  aboutMeText: z.array(z.string()).describe('An array of 2 paragraphs for the "About Me" section.'),
});
export type GenerateAboutPageContentOutput = z.infer<typeof GenerateAboutPageContentOutputSchema>;

export async function generateAboutPageContent(input: GenerateAboutPageContentInput): Promise<GenerateAboutPageContentOutput> {
  return generateAboutPageContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutPageContentPrompt',
  input: {schema: GenerateAboutPageContentInputSchema},
  output: {schema: GenerateAboutPageContentOutputSchema},
  prompt: `You are an expert copywriter for a personal portfolio website. Your task is to generate all dynamic content for the About page in one go.

  **Instructions:**

  1.  **Generate Creative Titles:**
      -   Create a short, compelling title for the "About Me" section (e.g., "My Story", "Who I Am").
      -   Create a short, compelling title for the "What I Do" section (e.g., "My Focus", "How I Help").
      -   Each title should be 2-3 words. Do not use quotes in the output.

  2.  **Generate "About Me" Text:**
      -   Write a compelling, 2-paragraph "About Me" section.
      -   Write in the first person, as if you are the profile owner.
      -   The tone should be professional, passionate, and slightly informal.
      -   Do not just list the skills or experience. Weave them into a narrative about passion, expertise, and what drives you.

  **Profile Information to Use:**
  -   **Name:** {{{name}}}
  -   **Title:** {{{title}}}
  -   **Key Skills:**
      {{#each skills}}
      -   **{{@key}}**: {{#each this}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
      {{/each}}
  -   **Recent Work:**
      {{#each workExperience}}
      -   **{{{role}}} at {{{company}}}**: {{#if bullets}}{{#each bullets}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}{{/if}}
      {{/each}}
  
  Please generate all content and return it in the specified JSON format.
  `,
});

const generateAboutPageContentFlow = ai.defineFlow(
  {
    name: 'generateAboutPageContentFlow',
    inputSchema: GenerateAboutPageContentInputSchema,
    outputSchema: GenerateAboutPageContentOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
