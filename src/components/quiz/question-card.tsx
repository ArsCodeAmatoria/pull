"use client";

import { motion } from "framer-motion";
import type { Question } from "@/types/question";
import { AnswerOption } from "./answer-option";
import { ExplanationPanel } from "./explanation-panel";
import { ChartDisplay } from "./chart-display";
import { FileSpreadsheet, ExternalLink } from "lucide-react";
import { useTranslations } from "@/i18n/locale-context";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  showExplanation: boolean;
  onSelectAnswer: (answerId: string) => void;
  questionNumber: number;
  isReviewMode?: boolean;
}

export function QuestionCard({
  question,
  selectedAnswer,
  showExplanation,
  onSelectAnswer,
  questionNumber,
  isReviewMode = false,
}: QuestionCardProps) {
  const { t } = useTranslations();
  const chartPdf = question.chartPdf;
  const chartName = question.chartName;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="category-label">{t("practiceTest.question")} {questionNumber}</span>
          {question.category && (
            <>
              <span className="text-muted-foreground">·</span>
              <span className="text-lg text-muted-foreground">{question.category}</span>
            </>
          )}
        </div>
        {chartPdf && (
          <a
            href={`/redtc/chart-pdf/${chartPdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 bg-foreground/5 px-4 py-2 text-lg font-medium text-foreground"
          >
            <FileSpreadsheet className="h-5 w-5" />
            {t("practiceTest.openChart", { name: chartName || t("practiceTest.loadChart") })}
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
        <ChartDisplay questionText={question.question} />
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={option.id}
            option={option}
            index={index}
            isSelected={selectedAnswer === option.id}
            isCorrect={option.id === question.correctAnswer}
            showResult={showExplanation}
            onClick={() => onSelectAnswer(option.id)}
            disabled={showExplanation && !isReviewMode}
          />
        ))}
      </div>

      <ExplanationPanel question={question} isVisible={showExplanation} />
    </motion.div>
  );
}
