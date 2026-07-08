"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
import { PageShell } from "@/components/page-shell";
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
    return <TrackComingSoon />;
  }

  return <PracticeTestActive track={track} />;
}

function PracticeTestActive({ track }: { readonly track: ReturnType<typeof parseTrackSlug> }) {
  const questions = getTrackQuestions(track);
  const totalInBank = questions.length;
  const isPro = track === "pro-rigging";

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

  const topicsText = isPro ? t("tracks.pro.testTopics") : t("practiceTest.riggingTopicsText");
  const topicsTitle = isPro ? t("tracks.pro.testTopicsTitle") : t("practiceTest.riggingTopics");
  const testTitle = isPro ? t("tracks.pro.testTitle") : t("practiceTest.title");
  const testSubtitle = isPro ? t("tracks.pro.testSubtitle") : t("practiceTest.subtitle");

  if (!hasStarted) {
    return (
      <PageShell className="py-10 lg:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          <div className="space-y-4 lg:max-w-3xl">
            <nav className="text-lg text-muted-foreground">
              <Link href="/">{t("common.home")}</Link>
              {" / "}
              <span className="text-foreground">{testTitle}</span>
            </nav>
            <span className="category-label">{t("practiceTest.category")}</span>
            <h1>{testTitle}</h1>
            <p className="text-xl text-muted-foreground lg:text-2xl">{testSubtitle}</p>
            {locale === "es" ? (
              <p className="rounded-sm bg-foreground/5 px-4 py-3 text-base text-muted-foreground">
                {t("practiceTest.questionsEnglishNotice")}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-3 gap-3 text-center lg:max-w-2xl">
            <div className="bg-foreground/5 p-4 lg:p-6">
              <div className="text-3xl font-bold lg:text-4xl">10</div>
              <div className="mt-1 text-sm text-muted-foreground lg:text-base">{t("practiceTest.questions")}</div>
            </div>
            <div className="bg-foreground/5 p-4 lg:p-6">
              <div className="text-3xl font-bold lg:text-4xl">{passPercentage}%</div>
              <div className="mt-1 text-sm text-muted-foreground lg:text-base">{t("practiceTest.toPass")}</div>
            </div>
            <div className="bg-foreground/5 p-4 lg:p-6">
              <div className="text-3xl font-bold lg:text-4xl">{totalInBank}</div>
              <div className="mt-1 text-sm text-muted-foreground lg:text-base">{t("practiceTest.inBank")}</div>
            </div>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <h2 className="lg:col-span-3">{t("practiceTest.whatToExpect")}</h2>
            {[
              { icon: BookOpen, title: t("practiceTest.multipleChoice"), text: t("practiceTest.multipleChoiceText") },
              { icon: Target, title: t("practiceTest.instantFeedback"), text: t("practiceTest.instantFeedbackText") },
              { icon: HardHat, title: topicsTitle, text: topicsText },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="space-y-2">
                <Icon className="h-7 w-7 lg:h-8 lg:w-8" />
                <h3>{title}</h3>
                <p className="text-lg text-muted-foreground lg:text-xl">{text}</p>
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
          <div className="space-y-4 text-center">
            <span className="category-label">{isPassed ? t("practiceTest.passed") : t("practiceTest.keepStudying")}</span>
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground lg:h-20 lg:w-20">
                {isPassed ? <Check className="h-8 w-8 lg:h-10 lg:w-10" /> : <X className="h-8 w-8 lg:h-10 lg:w-10" />}
              </div>
              <p className="text-6xl font-bold lg:text-7xl">{results.percentage}%</p>
            </div>
            <p className="text-xl text-muted-foreground lg:text-2xl">
              {isPassed
                ? t("practiceTest.passedMessage")
                : t("practiceTest.failedMessage", { pass: passPercentage })}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center lg:max-w-xl lg:mx-auto">
            <div className="bg-foreground/5 p-6 lg:p-8">
              <div className="text-4xl font-bold lg:text-5xl">{results.correctCount}</div>
              <div className="mt-2 text-lg text-muted-foreground">{t("practiceTest.correct")}</div>
            </div>
            <div className="bg-foreground/5 p-6 lg:p-8">
              <div className="text-4xl font-bold lg:text-5xl">{results.incorrectCount}</div>
              <div className="mt-2 text-lg text-muted-foreground">{t("practiceTest.incorrect")}</div>
            </div>
          </div>

          <div className="space-y-6">
            <h2>{t("practiceTest.timeStats")}</h2>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                { icon: Clock, value: formatTime(totalTestTime), label: t("practiceTest.totalTime") },
                { icon: Timer, value: formatTime(timingStats.average), label: t("practiceTest.avgPerQuestion") },
                { icon: BarChart3, value: formatTime(timingStats.fastest), label: t("practiceTest.fastestAnswer") },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4 bg-foreground/5 p-4 lg:p-6">
                  <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                  <div>
                    <div className="text-2xl font-bold lg:text-3xl">{value}</div>
                    <div className="text-muted-foreground">{label}</div>
                  </div>
                </div>
              ))}
            </div>
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
        <span className="font-display font-bold uppercase tracking-wide">{t("practiceTest.header")}</span>
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
