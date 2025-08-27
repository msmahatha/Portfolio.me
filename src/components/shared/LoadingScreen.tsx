
'use client';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center">
        <div className="flex items-end h-16 space-x-2">
          <div className="w-4 bg-accent equalizer-bar" style={{ animationDelay: '0s', height: '100%' }}></div>
          <div className="w-4 bg-accent equalizer-bar" style={{ animationDelay: '0.1s', height: '80%' }}></div>
          <div className="w-4 bg-accent equalizer-bar" style={{ animationDelay: '0.2s', height: '60%' }}></div>
          <div className="w-4 bg-accent equalizer-bar" style={{ animationDelay: '0.3s', height: '90%' }}></div>
          <div className="w-4 bg-accent equalizer-bar" style={{ animationDelay: '0.4s', height: '70%' }}></div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mt-4">Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
