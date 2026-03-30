import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ text, className = '', delay = 30 }: SplitTextProps) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: inView
        ? { opacity: 1, transform: 'translate3d(0,0px,0)' }
        : { opacity: 0, transform: 'translate3d(0,40px,0)' },
      delay: i * delay,
      config: { mass: 1, tension: 100, friction: 18 },
    }))
  );

  return (
    <div className={`inline-block overflow-hidden ${className}`} ref={ref}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.map((letter, letterIndex) => {
            const index = words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex;
            return (
              <animated.span
                key={index}
                style={springs[index] as any}
                className="inline-block will-change-transform"
              >
                {letter}
              </animated.span>
            );
          })}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </div>
  );
};
