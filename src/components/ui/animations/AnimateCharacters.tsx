import { motion } from "framer-motion";

interface AnimatedCharacterProps {
  char: string;
  delay?: number;
  innerRef?: React.Ref<HTMLSpanElement> | null;
}

export default function AnimatedCharacter({
  char,
  delay = 0,
  innerRef,
}: AnimatedCharacterProps) {
  return (
    <motion.span
      initial={{ opacity: 0, rotateX: 90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
      className="inline-block"
      ref={innerRef}
    >
      {char}
    </motion.span>
  );
}
