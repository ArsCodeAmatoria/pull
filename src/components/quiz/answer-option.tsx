"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Question } from "@/types/question";

interface AnswerOptionProps {
  option: Question["options"][0];
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const optionLetters = ["A", "B", "C", "D"];

export function AnswerOption({
  option,
  index,
  isSelected,
  isCorrect,
  showResult,
  onClick,
  disabled = false,
}: AnswerOptionProps) {
  const isWrongSelection = showResult && isSelected && !isCorrect;
  const isCorrectAnswer = showResult && isCorrect;

  return (
    <motion.button
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full text-left transition-opacity",
        "p-5 min-h-[60px]",
        "flex items-start gap-4",
        disabled && "cursor-default",
        !showResult && !disabled && "bg-foreground/5 active:opacity-80",
        !showResult && isSelected && "bg-primary text-primary-foreground",
        isCorrectAnswer && "bg-primary text-primary-foreground",
        isWrongSelection && "bg-foreground/10 opacity-70"
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center text-sm font-bold",
          !showResult && !isSelected && "bg-foreground/10",
          (!showResult && isSelected) || isCorrectAnswer ? "bg-primary-foreground/20" : "",
          isWrongSelection && "bg-foreground/10"
        )}
      >
        {showResult ? (
          isCorrect ? (
            <Check className="h-5 w-5" />
          ) : isSelected ? (
            <X className="h-5 w-5" />
          ) : (
            optionLetters[index]
          )
        ) : (
          optionLetters[index]
        )}
      </div>

      <span className="flex-1 text-lg leading-relaxed pt-0.5">{option.text}</span>

      {showResult && (isCorrect || isWrongSelection) && (
        <span className="shrink-0 pt-1 text-sm font-bold uppercase tracking-wider">
          {isCorrect ? "Correct" : "Wrong"}
        </span>
      )}
    </motion.button>
  );
}
