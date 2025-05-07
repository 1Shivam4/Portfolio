import { useEffect, useRef, useState } from "react";
import AnimatedCharacter from "./animations/AnimateCharacters";

interface WordRotatorProps {
  words: string[];
}

export default function WordRotator({ words }: WordRotatorProps) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const lineRef = useRef<HTMLSpanElement>(null);
  const [lineBreaks, setLineBreaks] = useState<number[]>([]);

  useEffect(() => {
    const word = words[index];

    if (charIndex < word.length) {
      const timeout = setTimeout(() => {
        setDisplayedWord((prev) => prev + word[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedWord("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 1500);

      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, index, words]);

  useEffect(() => {
    if (lineRef.current) {
      const top = lineRef.current.getBoundingClientRect().top;
      if (!lineBreaks.includes(top)) {
        setLineBreaks((prev) => [...prev, top]);
      }
    }
  }, [displayedWord]);

  return (
    <div className="text-primary whitespace-pre-wrap leading-relaxed w-full max-w-xl">
      <span className="block" style={{ minHeight: "2em" }}>
        {displayedWord.split("").map((char, i) => (
          <AnimatedCharacter
            key={i}
            char={char === " " ? "\u00A0" : char}
            innerRef={i === displayedWord.length - 1 ? lineRef : null}
          />
        ))}
      </span>
    </div>
  );
}
