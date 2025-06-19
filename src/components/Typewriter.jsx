import { useState, useEffect } from 'react';

export default function Typewriter({ 
  text, 
  speed = 80, 
  showCursor = true, 
  cursorChar = '|',
  onComplete,
  className = "",
  startDelay = 0
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayedText('');
    setIsTypingComplete(false);
    setShowCursorBlink(false);

    const startTimer = setTimeout(() => {
      setShowCursorBlink(true);
      
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typeTimer);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(typeTimer);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, onComplete, startDelay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && showCursorBlink && (
        <span className={`${isTypingComplete ? 'animate-pulse' : ''}`}>
          {cursorChar}
        </span>
      )}
    </span>
  );
}