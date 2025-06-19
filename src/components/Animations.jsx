import { useState, useEffect } from 'react';

export default function AnimatedElement({ children, delay = 0, className = "", duration = 1200 }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100 + delay);
  }, [delay]);

  return (
    <div className={`transition-all ease-out opacity-0 translate-y-4
                     ${isLoaded ? 'opacity-100 translate-y-0' : ''}
                     ${className}`}
         style={{ transitionDuration: `${duration}ms` }}>
      {children}
    </div>
  );
}