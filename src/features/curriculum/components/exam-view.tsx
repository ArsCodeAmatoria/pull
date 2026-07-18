"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { QuestionCard, ProgressBar } from "@/components/quiz";
import type { Question } from "@/types/question";
import {
  startExamAttemptAction,
  submitExamAttemptAction,
} from "@/app/actions/exam-actions";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

type SubmittedResult = { score: number; maxScore: number; passed: boolean };

export function ExamView({
  moduleCode,
  examId,
  examTitle,
  passingScore,
  timeLimitMin,
  questionBank,
  questionCount = 15,
}: {
  readonly moduleCode: string;
  readonly examId: string;
  readonly examTitle: string;
  readonly passingScore: number;
  readonly timeLimitMin: number | null;
  readonly questionBank: Question[];
  readonly questionCount?: number;
}) {
  const [phase, setPhase] = useState<"intro" | "active" | "complete">("intro");
  const [resultId, setResultId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [starting, setStarting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<SubmittedResult | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const startedAt = useRef<number>(0);

  const currentQuestion = questions[index];
  const answeredCount = Object.keys(answers).length;

  const handleStart = async () => {
    setStarting(true);
    setError(null);
    const result = await startExamAttemptAction(examId);
    setStarting(false);
    if (result.error || !result.resultId) {
      setError(result.error ?? "Unable to start exam.");
      return;
    }
    setResultId(result.resultId);
    setQuestions(shuffle(questionBank).slice(0, Math.min(questionCount, questionBank.length)));
    setIndex(0);
    setAnswers({});
    setShowExplanation(false);
    startedAt.current = Date.now();
    setPhase("active");
  };

  const selectAnswer = (answerId: string) => {
    if (!currentQuestion || showExplanation) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answerId }));
    setShowExplanation(true);
  };

  const finish = async () => {
    if (!resultId) return;
    setSubmitting(true);
    setError(null);

    const score = questions.reduce(
      (sum, q) => (answers[q.id] === q.correctAnswer ? sum + 1 : sum),
      0,
    );
    const maxScore = questions.length;
    const durationSeconds = Math.round((Date.now() - startedAt.current) / 1000);

    const result = await submitExamAttemptAction({
      moduleCode,
      resultId,
      answers: Object.fromEntries(
        Object.entries(answers).map(([id, value]) => [id, value]),
      ),
      durationSeconds,
      passingScore,
      clientScore: { score, maxScore },
    });

    setSubmitting(false);

    if (result.error || !result.result) {
      setError(result.error ?? "Unable to submit exam.");
      return;
    }

    setSubmitted({
      score: result.result.score ?? score,
      maxScore: result.result.maxScore ?? maxScore,
      passed: Boolean(result.result.passed),
    });
    setPhase("complete");
  };

  const next = () => {
    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
      setShowExplanation(Boolean(answers[questions[index + 1]?.id]));
    } else {
      void finish();
    }
  };

  const previous = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      setShowExplanation(Boolean(answers[questions[index - 1]?.id]));
    }
  };

  const isLast = index === questions.length - 1;

  const percentage = useMemo(() => {
    if (!submitted || submitted.maxScore === 0) return 0;
    return Math.round((submitted.score / submitted.maxScore) * 100);
  }, [submitted]);

  if (phase === "intro") {
    return (
      <PageShell className="py-10 lg:py-16">
        <div className="space-y-6">
          <nav aria-label="Breadcrumb" className="text-lg text-muted-foreground">
            <Link href="/curriculum">Curriculum</Link> /{" "}
            <Link href={`/curriculum/${moduleCode}`}>Module</Link> /{" "}
            <span className="text-foreground">Exam</span>
          </nav>
          <span className="category-label">Official examination</span>
          <h1>{examTitle}</h1>
          <p className="text-xl text-muted-foreground lg:text-2xl">
            {questionCount} questions · {passingScore}% required to pass
            {timeLimitMin ? ` · ${timeLimitMin} min suggested time limit` : ""}
          </p>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={handleStart} size="lg" disabled={starting}>
              {starting ? "Starting…" : "Start official exam"}
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={`/curriculum/${moduleCode}`}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to module
              </Link>
            </Button>
          </div>
        </div>
      </PageShell>
    );
  }

  if (phase === "complete" && submitted) {
    return (
      <PageShell className="py-10 lg:py-16">
        <div className="space-y-10 text-center">
          <span className="category-label">
            {submitted.passed ? "Exam passed" : "Exam not passed"}
          </span>
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground">
              {submitted.passed ? <Check className="h-8 w-8" /> : <X className="h-8 w-8" />}
            </div>
            <p className="text-6xl font-bold">{percentage}%</p>
          </div>
          <p className="text-xl text-muted-foreground">
            {submitted.score} / {submitted.maxScore} correct — {passingScore}% required to pass.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={handleStart} size="lg">
              <RotateCcw className="mr-2 h-5 w-5" />
              Retake exam
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={`/curriculum/${moduleCode}`}>Back to module</Link>
            </Button>
          </div>
        </div>
      </PageShell>
    );
  }

  if (!currentQuestion) {
    return (
      <PageShell className="flex min-h-[50vh] items-center justify-center py-10">
        <p className="text-xl font-medium">Loading…</p>
      </PageShell>
    );
  }

  return (
    <PageShell className="py-6 lg:py-10">
      <div className="mb-6 flex items-center justify-between text-lg text-muted-foreground">
        <span className="font-display font-bold uppercase tracking-wide">{examTitle}</span>
        <span>{passingScore}% to pass</span>
      </div>

      <div className="mb-8">
        <ProgressBar current={answeredCount} total={questions.length} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion.id}>
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id] ?? null}
            showExplanation={showExplanation}
            onSelectAnswer={selectAnswer}
            questionNumber={index + 1}
          />
        </motion.div>
      </AnimatePresence>

      {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}

      <div className="mt-10 flex flex-col gap-4">
        <div className="text-center text-lg text-muted-foreground">
          {index + 1} / {questions.length}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="secondary" onClick={previous} disabled={index === 0} className="sm:flex-1">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>
          <Button onClick={next} disabled={!showExplanation || submitting} className="sm:flex-1">
            {submitting ? "Submitting…" : isLast ? "Finish exam" : "Next"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
