import { useState } from "react";
import useInterval from "@/lib/useInterval";

interface IWordCycleProps {
  words: string[]
}

const WordCycle: React.FC<IWordCycleProps> = (props) => {
  let [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex(index === props.words.length - 1 ? 0 : index + 1);
  }, 2000);

  return (
    <span className="animate-pulse px-8 text-4xl sm:text-8xl text-white dark:text-pink-400">
      {props.words[index]}
    </span>
  );
}

export default WordCycle;