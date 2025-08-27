
'use client';

const LoadingScreen = () => {
  return (
    <div
      className="fixed inset-0 bg-background flex items-center justify-center z-[100]"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-end h-16 space-x-2">
          <div className="w-4 bg-accent equalizer-bar"></div>
          <div className="w-4 bg-accent equalizer-bar"></div>
          <div className="w-4 bg-accent equalizer-bar"></div>
          <div className="w-4 bg-accent equalizer-bar"></div>
          <div className="w-4 bg-accent equalizer-bar"></div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mt-4">Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
