'use server';
/**
 * @fileOverview An AI-powered tool that generates a dynamic "About Me" section.
 *
 * - generateAboutMe - A function that creates a compelling bio from profile data.
 * - GenerateAboutMeInput - The input type for the generateAboutMe function.
 * - GenerateAboutMeOutput - The return type for the generateAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeInputSchema = z.object({
  name: z.string().describe('The name of the profile owner.'),
  title: z.string().describe('The current title of the profile.'),
  skills: z.record(z.array(z.string())).describe('A map of skill categories to skill lists.'),
  workExperience: z.array(z.object({
    role: z.string(),
    company: z.string(),
    bullets: z.array(z.string()).optional(),
  })).describe('List of work experiences.'),
});
export type GenerateAboutMeInput = z.infer<typeof GenerateAboutMeInputSchema>;

const GenerateAboutMeOutputSchema = z.object({
  aboutMeText: z.array(z.string()).describe('An array of paragraphs for the "About Me" section.'),
});
export type GenerateAboutMeOutput = z.infer<typeof GenerateAboutMeOutputSchema>;

export async function generateAboutMe(input: GenerateAboutMeInput): Promise<GenerateAboutMeOutput> {
  return generateAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: GenerateAboutMeInputSchema},
  output: {schema: GenerateAboutMeOutputSchema},
  prompt: `You are an expert copywriter for a personal portfolio website. Your task is to generate a compelling, 2-paragraph "About Me" section.
  
  Write in the first person, as if you are the profile owner. The tone should be professional, passionate, and slightly informal.

  Use the following information to craft the bio:
  - Name: {{{name}}}
  - Title: {{{title}}}
  - Key Skills:
    {{#each skills}}
      - {{@key}}: {{#each this}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
    {{/each}}
  - Recent Work:
    {{#each workExperience}}
      - {{{role}}} at {{{company}}}: {{#if bullets}}{{#each bullets}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}{{/if}}
    {{/each}}
  
  Generate two distinct paragraphs and return them in the 'aboutMeText' array.
  Do not just list the skills or experience. Weave them into a narrative about passion, expertise, and what drives you.
  `,
});

const generateAboutMeFlow = ai.defineFlow(
  {
    name: 'generateAboutMeFlow',
    inputSchema: GenerateAboutMeInputSchema,
    outputSchema: GenerateAboutMeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
