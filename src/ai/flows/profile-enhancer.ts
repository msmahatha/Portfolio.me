'use server';

/**
 * @fileOverview An AI-powered tool that reviews profile content and suggests improvements.
 *
 * - enhanceProfile - A function that enhances the profile based on the input data.
 * - EnhanceProfileInput - The input type for the enhanceProfile function.
 * - EnhanceProfileOutput - The return type for the enhanceProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProfileInputSchema = z.object({
  name: z.string().describe('The name of the profile owner.'),
  title: z.string().describe('The current title of the profile.'),
  about: z.string().describe('A short bio or about section of the profile.'),
  workExperience: z.array(z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    bullets: z.array(z.string()).optional(),
  })).describe('List of work experiences.'),
  skills: z.array(z.string()).describe('List of skills.'),
});
export type EnhanceProfileInput = z.infer<typeof EnhanceProfileInputSchema>;

const EnhanceProfileOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of suggestions to improve the profile.'),
});
export type EnhanceProfileOutput = z.infer<typeof EnhanceProfileOutputSchema>;

export async function enhanceProfile(input: EnhanceProfileInput): Promise<EnhanceProfileOutput> {
  return enhanceProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceProfilePrompt',
  input: {schema: EnhanceProfileInputSchema},
  output: {schema: EnhanceProfileOutputSchema},
  prompt: `You are an AI-powered profile enhancement tool. Review the following profile information and provide specific, actionable suggestions to make it more compelling and effective.

Profile Information:
Name: {{{name}}}
Title: {{{title}}}
About: {{{about}}}

Work Experience:
{{#each workExperience}}
  Role: {{{role}}}
  Company: {{{company}}}
  Period: {{{period}}}
  {{#if bullets}}
    Bullets:
    {{#each bullets}}
      - {{{this}}}
    {{/each}}
  {{/if}}
{{/each}}

Skills:
{{#each skills}}
  - {{{this}}}
{{/each}}

Suggestions (be specific and actionable):`,
});

const enhanceProfileFlow = ai.defineFlow(
  {
    name: 'enhanceProfileFlow',
    inputSchema: EnhanceProfileInputSchema,
    outputSchema: EnhanceProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
