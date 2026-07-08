"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  Clock,
  HardHat,
  RotateCcw,
  Target,
  Timer,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuestionCard, ProgressBar } from "@/components/quiz";
import { useTest } from "@/hooks/use-test";
import questionsData from "@/data/questions.json";
import type { Question } from "@/types/question";

const questions = questionsData as Question[];
const TOTAL_IN_BANK = questions.length;

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
  return `${remainingSeconds}s`;
}

export default function PracticeTestPage() {
  const [hasStarted, setHasStarted] = useState(false);

  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    showExplanation,
    isComplete,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetTest,
    initializeTest,
    results,
    answeredCount,
    totalQuestions,
    totalQuestionsInBank,
    canGoNext,
    canGoPrevious,
    isLastQuestion,
    passPercentage,
    totalTestTime,
    timingStats,
  } = useTest(questions);

  const handleStart = () => {
    initializeTest();
    setHasStarted(true);
  };

  if (!hasStarted) {
    return (
      <div className="px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto max-w-2xl space-y-10"
        >
          <div className="text-center space-y-4">
            <span className="category-label">Practice mode</span>
            <h1 className="text-4xl font-bold md:text-5xl">Practice test</h1>
            <p className="mx-auto max-w-md text-lg text-muted-foreground">
              Test your knowledge with 10 randomly selected questions. This prepares you for the in-person certification
              evaluation — it is not the official exam.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-border bg-muted/20 p-4 text-center">
              <div className="text-3xl font-bold text-primary">10</div>
              <div className="mt-1 text-xs text-muted-foreground">Questions</div>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4 text-center">
              <div className="text-3xl font-bold text-primary">{passPercentage}%</div>
              <div className="mt-1 text-xs text-muted-foreground">To pass</div>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4 text-center">
              <div className="text-3xl font-bold text-primary">{TOTAL_IN_BANK}</div>
              <div className="mt-1 text-xs text-muted-foreground">In bank</div>
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="space-y-6">
            <h2 className="text-center text-xl font-bold">What to expect</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Multiple choice",
                  text: "Each question has four options with detailed explanations after answering.",
                },
                {
                  icon: Target,
                  title: "Instant feedback",
                  text: "See correct answers immediately with explanations for each question.",
                },
                {
                  icon: HardHat,
                  title: "Real exam topics",
                  text: "Questions cover safety, rigging, load charts, communication, and operations.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col items-center space-y-2 p-4 text-center">
                  <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="text-xs text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="space-y-4">
            <Button onClick={handleStart} className="h-14 w-full text-lg font-bold" size="lg">
              Start practice test
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Questions are randomly selected each time. Official certification requires an in-person evaluation.
            </p>
            <Link
              href="/certification"
              className="block text-center text-sm text-muted-foreground hover:text-foreground"
            >
              About in-person certification →
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isComplete) {
    const isPassed = results.passed;

    return (
      <div className="px-4 py-12 md:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-2xl space-y-10">
          <div className="space-y-4 text-center">
            <span className={`category-label ${!isPassed && "text-muted-foreground"}`}>
              {isPassed ? "Practice passed" : "Keep studying"}
            </span>
            <div className="flex items-center justify-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-lg ${
                  isPassed ? "bg-primary" : "bg-muted"
                }`}
              >
                {isPassed ? (
                  <Check className="h-8 w-8 text-primary-foreground" strokeWidth={2.5} />
                ) : (
                  <X className="h-8 w-8 text-muted-foreground" strokeWidth={2.5} />
                )}
              </div>
              <h1 className="text-6xl font-bold md:text-7xl">{results.percentage}%</h1>
            </div>
            <p className="text-muted-foreground">
              {isPassed
                ? "Solid work. Keep practicing to stay sharp before your in-person evaluation."
                : `You need ${passPercentage}% to pass practice. Review the lessons and try again.`}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-muted/20 p-6 text-center">
              <div className="text-4xl font-bold text-primary">{results.correctCount}</div>
              <div className="mt-2 text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-6 text-center">
              <div className="text-4xl font-bold">{results.incorrectCount}</div>
              <div className="mt-2 text-sm text-muted-foreground">Incorrect</div>
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="space-y-6">
            <h2 className="text-center text-xl font-bold">Time statistics</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, value: formatTime(totalTestTime), label: "Total time" },
                { icon: Timer, value: formatTime(timingStats.average), label: "Average per question" },
                { icon: BarChart3, value: formatTime(timingStats.fastest), label: "Fastest answer" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center space-y-2 p-4 text-center">
                  <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{value}</div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-border" />

          <div className="space-y-3">
            <Button onClick={() => resetTest()} className="h-14 w-full text-lg font-bold" size="lg">
              <RotateCcw className="mr-2 h-5 w-5" />
              {isPassed ? "Practice again" : "Try again"}
            </Button>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/lessons">
                <Button variant="outline" className="w-full" size="lg">
                  Review lessons
                </Button>
              </Link>
              <Link href="/certification">
                <Button variant="outline" className="w-full" size="lg">
                  Certification info
                </Button>
              </Link>
            </div>
            <p className="pt-2 text-center text-xs text-muted-foreground">
              {totalQuestions} questions · {totalQuestionsInBank} in question bank · {passPercentage}% pass threshold
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="mx-auto h-8 w-8 animate-pulse rounded bg-primary" />
          <p className="font-medium">Loading questions…</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="border-b border-border bg-muted/20">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">pull practice</span>
          <span className="text-sm text-muted-foreground">{passPercentage}% to pass</span>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <ProgressBar current={answeredCount} total={totalQuestions} />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            showExplanation={showExplanation}
            onSelectAnswer={selectAnswer}
            questionNumber={currentQuestionIndex + 1}
          />
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between gap-2 border-t border-border pt-8">
          <Button variant="outline" onClick={previousQuestion} disabled={!canGoPrevious} className="min-h-[44px]">
            <ArrowLeft className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <span className="whitespace-nowrap text-sm text-muted-foreground">
            {currentQuestionIndex + 1} / {totalQuestions}
          </span>

          <Button
            onClick={nextQuestion}
            disabled={!canGoNext}
            className={`min-h-[44px] ${canGoNext && isLastQuestion ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
          >
            <span className="hidden sm:inline">{isLastQuestion ? "Finish" : "Next"}</span>
            <span className="sm:hidden">{isLastQuestion ? "Done" : "Next"}</span>
            <ArrowRight className="h-4 w-4 sm:ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
