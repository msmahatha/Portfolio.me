'use client';

import { useState } from 'react';
import { enhanceProfile, type EnhanceProfileInput, type EnhanceProfileOutput } from '@/ai/flows/profile-enhancer';
import { profileData } from '@/data/profileData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';

export default function ProfileEnhancerClient() {
  const [suggestions, setSuggestions] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEnhanceProfile = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    const input: EnhanceProfileInput = {
      name: profileData.name,
      title: profileData.title,
      about: `${profileData.about.paragraph1} ${profileData.about.paragraph2}`,
      workExperience: profileData.work.map(w => ({
        role: w.role,
        company: w.company,
        period: w.period,
        bullets: w.bullets,
      })),
      skills: Object.values(profileData.skills).flat(), // Flatten the skills object into an array
    };

    try {
      const result: EnhanceProfileOutput = await enhanceProfile(input);
      setSuggestions(result.suggestions);
    } catch (e) {
      console.error("Failed to enhance profile:", e);
      setError("Sorry, something went wrong while generating suggestions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="w-6 h-6 mr-2 text-accent" />
          AI Profile Enhancer
        </CardTitle>
        <CardDescription>
          Get AI-powered suggestions to make your profile even more compelling.
          This tool analyzes your current profile data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isLoading && (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
            <p className="ml-2">Generating suggestions...</p>
          </div>
        )}

        {suggestions && !isLoading && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Here are some suggestions:</h3>
            <ul className="list-disc list-inside space-y-2 bg-secondary/50 p-4 rounded-md text-secondary-foreground">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleEnhanceProfile} disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-primary-foreground">
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enhancing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Enhance My Profile
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
