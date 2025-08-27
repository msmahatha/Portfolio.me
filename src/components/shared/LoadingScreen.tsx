
'use client';

import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const numColumns = 20;
  const numRows = 10;

  const getBarColor = (rowIndex: number) => {
    if (rowIndex < 2) return 'bg-red-500';
    if (rowIndex < 5) return 'bg-orange-500';
    if (rowIndex < 10) return 'bg-yellow-400';
    return 'bg-gray-700'; // Fallback
  };

  const [activeBars, setActiveBars] = useState<number[]>([]);

  useEffect(() => {
    // Set initial state only on the client-side after mount
    const initialActiveBars = Array.from({ length: numColumns }).map(() =>
      Math.floor(Math.random() * (numRows + 1))
    );
    setActiveBars(initialActiveBars);

    const interval = setInterval(() => {
      const newActiveBars = Array.from({ length: numColumns }).map(() =>
        Math.floor(Math.random() * (numRows + 1))
      );
      setActiveBars(newActiveBars);
    }, 200); // Update every 200ms

    return () => clearInterval(interval);
  }, [numColumns, numRows]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[100]">
      <div className="w-[360px] p-6 bg-gray-900/50 rounded-lg border border-gray-700 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Loading...</h2>
        <div className="flex flex-col-reverse gap-y-1">
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-x-1">
              {Array.from({ length: numColumns }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-3 h-3 rounded-[1px] transition-colors duration-200 ${
                    (activeBars[colIndex] ?? 0) >= numRows - rowIndex
                      ? getBarColor(rowIndex)
                      : 'bg-gray-700'
                  }`}
                  style={{
                    animationDelay: `${colIndex * 0.05}s`,
                    animationDuration: `${1 + Math.random()}s`,
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
