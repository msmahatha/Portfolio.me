
'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset when text or speed changes
    let currentText = '';
    let index = 0;
    let timeoutId: NodeJS.Timeout | undefined = undefined;

    function type() {
      if (index < text.length) {
        currentText += text.charAt(index);
        setDisplayedText(currentText);
        index++;
        timeoutId = setTimeout(type, speed);
      }
    }

    // Only start typing if text is provided
    if (text && text.length > 0) {
      // Start typing after an initial delay (equal to speed)
      timeoutId = setTimeout(type, speed);
    }

    return () => {
      // Cleanup timeout on unmount or if dependencies change before completion
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed]);

  // Render a non-breaking space if displayedText is empty to give some initial content
  // to the parent h2, ensuring it has some height for layout consistency.
  return <>{displayedText || <span aria-hidden="true">&nbsp;</span>}</>;
};

export default TypingEffect;
