"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { SectionKicker } from "@/components/section-kicker";
import { QuestionCard, ProgressBar } from "@/components/quiz";
import { useTest } from "@/hooks/use-test";
import { useTranslations } from "@/i18n/locale-context";
import { getTrackQuestions, isTrackAvailable, parseTrackSlug, slidesIndexHref } from "@/lib/tracks";
import { TrackComingSoon } from "@/components/track-coming-soon";

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
  return `${remainingSeconds}s`;
}

export function PracticeTestView() {
  const searchParams = useSearchParams();
  const track = parseTrackSlug(searchParams.get("track"));

  if (!isTrackAvailable(track)) {
    return <TrackComingSoon track={track} />;
  }

  return <PracticeTestActive track={track} />;
}

function PracticeTestActive({ track }: { readonly track: ReturnType<typeof parseTrackSlug> }) {
  const questions = getTrackQuestions(track);
  const totalInBank = questions.length;
  const isIntermediate = track === "intermediate";

  const [hasStarted, setHasStarted] = useState(false);
  const { t, locale } = useTranslations();

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

  const topicsText = isIntermediate ? t("tracks.intermediate.testTopics") : t("practiceTest.riggingTopicsText");
  const topicsTitle = isIntermediate ? t("tracks.intermediate.testTopicsTitle") : t("practiceTest.riggingTopics");
  const testTitle = isIntermediate ? t("tracks.intermediate.testTitle") : t("practiceTest.title");
  const testSubtitle = isIntermediate ? t("tracks.intermediate.testSubtitle") : t("practiceTest.subtitle");

  if (!hasStarted) {
    return (
      <PageShell className="py-10 lg:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
          <div className="space-y-6 lg:max-w-3xl">
            <SectionKicker>{t("practiceTest.kicker")}</SectionKicker>
            <p className="mono text-[var(--steel)]">
              <Link href="/" className="hover:text-foreground">
                {t("common.home")}
              </Link>
              <span className="px-2">/</span>
              <span className="text-foreground">{testTitle}</span>
            </p>
            <h1>{testTitle}</h1>
            <p className="lede">{testSubtitle}</p>
            <p className="max-w-xl border-l-2 border-[var(--crown)] pl-4 text-[var(--copy)]">
              {t("disclaimer.educational")}
            </p>
            {locale === "es" ? (
              <p className="border-l-2 border-[var(--crown)] pl-4 text-[var(--copy)]">
                {t("practiceTest.questionsEnglishNotice")}
              </p>
            ) : null}
          </div>

          <div className="grid max-w-3xl grid-cols-3">
            <div className="border-t border-[var(--line)] py-6">
              <div className="step-n">10</div>
              <div className="mt-3 mono text-[var(--steel)]">{t("practiceTest.questions")}</div>
            </div>
            <div className="border-t border-[var(--line)] py-6">
              <div className="step-n">{passPercentage}%</div>
              <div className="mt-3 mono text-[var(--steel)]">{t("practiceTest.toPass")}</div>
            </div>
            <div className="border-t border-[var(--line)] py-6">
              <div className="step-n">{totalInBank}</div>
              <div className="mt-3 mono text-[var(--steel)]">{t("practiceTest.inBank")}</div>
            </div>
          </div>

          <div>
            <h2 className="mb-2">{t("practiceTest.whatToExpect")}</h2>
            {[
              { n: "01", title: t("practiceTest.multipleChoice"), text: t("practiceTest.multipleChoiceText") },
              { n: "02", title: t("practiceTest.instantFeedback"), text: t("practiceTest.instantFeedbackText") },
              { n: "03", title: topicsTitle, text: topicsText },
            ].map(({ n, title, text }) => (
              <div key={title} className="rule-row grid gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:items-baseline">
                <p className="step-n">{n}</p>
                <div>
                  <h3>{title}</h3>
                  <p className="mt-2 max-w-xl text-[var(--copy)]">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
            <Button onClick={handleStart} size="lg" className="sm:flex-1 lg:flex-none">
              {t("practiceTest.start")}
            </Button>
            <Button asChild variant="secondary" size="lg" className="sm:flex-1 lg:flex-none">
              <Link href={slidesIndexHref(track)}>{t("tracks.openLessons")}</Link>
            </Button>
          </div>
        </motion.div>
      </PageShell>
    );
  }

  if (isComplete) {
    const isPassed = results.passed;

    return (
      <PageShell className="py-10 lg:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          <div className="space-y-6">
            <SectionKicker>{isPassed ? t("practiceTest.passed") : t("practiceTest.keepStudying")}</SectionKicker>
            <div className="flex items-end gap-6">
              {isPassed ? <Check className="h-10 w-10 text-[var(--crown)]" /> : <X className="h-10 w-10 text-[var(--crown)]" />}
              <p className="font-[family-name:var(--font-display)] text-[clamp(4rem,14vw,9rem)] font-bold uppercase leading-none tracking-[-0.04em]">
                {results.percentage}%
              </p>
            </div>
            <p className="lede">
              {isPassed
                ? t("practiceTest.passedMessage")
                : t("practiceTest.failedMessage", { pass: passPercentage })}
            </p>
          </div>

          <div className="grid max-w-xl grid-cols-2">
            <div className="border-t border-[var(--line)] py-6">
              <div className="step-n">{results.correctCount}</div>
              <div className="mt-3 mono text-[var(--steel)]">{t("practiceTest.correct")}</div>
            </div>
            <div className="border-t border-[var(--line)] py-6">
              <div className="step-n">{results.incorrectCount}</div>
              <div className="mt-3 mono text-[var(--steel)]">{t("practiceTest.incorrect")}</div>
            </div>
          </div>

          <div>
            <h2 className="mb-2">{t("practiceTest.timeStats")}</h2>
            {[
              { value: formatTime(totalTestTime), label: t("practiceTest.totalTime") },
              { value: formatTime(timingStats.average), label: t("practiceTest.avgPerQuestion") },
              { value: formatTime(timingStats.fastest), label: t("practiceTest.fastestAnswer") },
            ].map(({ value, label }) => (
              <div key={label} className="rule-row grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                <span className="mono text-[var(--steel)]">{label}</span>
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
            <Button onClick={() => resetTest()} size="lg" className="sm:flex-1">
              <RotateCcw className="mr-2 h-5 w-5" />
              {isPassed ? t("practiceTest.practiceAgain") : t("practiceTest.tryAgain")}
            </Button>
            <Button asChild variant="secondary" size="lg" className="sm:flex-1">
              <Link href={slidesIndexHref(track)}>{t("tracks.openLessons")}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="sm:flex-1">
              <Link href={slidesIndexHref(track)}>{t("practiceTest.reviewLessons")}</Link>
            </Button>
          </div>
        </motion.div>
      </PageShell>
    );
  }

  if (!currentQuestion) {
    return (
      <PageShell className="flex min-h-[50vh] items-center justify-center py-10">
        <p className="text-xl font-medium lg:text-2xl">{t("practiceTest.loading")}</p>
      </PageShell>
    );
  }

  return (
    <PageShell className="py-6 lg:py-10">
      <div className="mb-6 flex items-center justify-between text-lg text-muted-foreground lg:text-xl">
        <span className="text-sm font-semibold tracking-tight text-foreground">{t("practiceTest.header")}</span>
        <span>{t("practiceTest.toPassShort", { pass: passPercentage })}</span>
      </div>

      <div className="mb-8">
        <ProgressBar current={answeredCount} total={totalQuestions} />
      </div>

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

      <div className="mt-10 flex flex-col gap-4">
        <div className="text-center text-lg text-muted-foreground lg:text-xl">
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="secondary" onClick={previousQuestion} disabled={!canGoPrevious} className="sm:flex-1">
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t("practiceTest.previous")}
          </Button>
          <Button onClick={nextQuestion} disabled={!canGoNext} className="sm:flex-1">
            {isLastQuestion ? t("practiceTest.finish") : t("practiceTest.next")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
