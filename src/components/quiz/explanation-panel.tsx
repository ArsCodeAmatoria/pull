"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, X } from "lucide-react";
import type { Question } from "@/types/question";

interface ExplanationPanelProps {
  question: Question;
  isVisible: boolean;
}

export function ExplanationPanel({ question, isVisible }: ExplanationPanelProps) {
  const correctOption = question.options.find((opt) => opt.id === question.correctAnswer);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="mt-6 bg-foreground/5">
            <div className="flex items-center gap-2 px-5 py-4">
              <BookOpen className="h-5 w-5" />
              <span className="text-lg font-bold">Explanation</span>
            </div>

            <div className="space-y-6 px-5 pb-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Correct answer</span>
                </div>
                <p className="text-lg leading-relaxed pl-7">
                  <span className="font-semibold">{correctOption?.text}</span>
                  {correctOption?.explanation && (
                    <span className="text-muted-foreground"> — {correctOption.explanation}</span>
                  )}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <X className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Why others are wrong
                  </span>
                </div>
                <div className="space-y-3 pl-7">
                  {question.options
                    .filter((opt) => opt.id !== question.correctAnswer)
                    .map((opt) => (
                      <p key={opt.id} className="text-lg leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground">{opt.text}</span>
                        {opt.explanation && <span> — {opt.explanation}</span>}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
