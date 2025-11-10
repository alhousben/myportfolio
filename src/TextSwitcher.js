import { useEffect, useState } from "react";

const phrases = [
  "Étudiant en informatique",
  "Ouvert aux nouvelles opportunités de création de sites et d'applications web",
];

export default function TextSwitcher() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout;

    if (!deleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 50);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setDeleting(!deleting);
        if (!deleting) {
          setCharIndex(currentPhrase.length);
        } else {
          setIndex((prev) => (prev + 1) % phrases.length);
          setCharIndex(0);
        }
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
   <div className="text-xl sm:text-2xl font-semibold text-center text-white h-24">
    <span className="whitespace-nowrap">{text}<span className="animate-pulse">|</span></span>
  </div>
  );
}
