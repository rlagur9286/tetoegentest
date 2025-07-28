import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { questions } from "@/data/questions";

export interface QuizScores {
  teto: number;
  egen: number;
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<QuizScores>({ teto: 0, egen: 0 });
  const [gender, setGender] = useState<string | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>(shuffleArray(questions));
  const [, setLocation] = useLocation();

  const selectAnswer = (value: string) => {
    if (value === "male" || value === "female") {
      setGender(value);
    } else if (value === "teto") {
      setScores(prev => ({ ...prev, teto: prev.teto + 1 }));
    } else if (value === "egen") {
      setScores(prev => ({ ...prev, egen: prev.egen + 1 }));
    }
    // 'middle' answers don't change scores

    setCurrentQuestion(prev => prev + 1);
  };

  const getPersonalityType = (): string => {
    if (!gender) return "egen_male"; // fallback
    
    if (scores.teto > scores.egen) {
      return gender === "male" ? "teto_male" : "teto_female";
    } else {
      return gender === "male" ? "egen_male" : "egen_female";
    }
  };

  const goToResults = () => {
    const personalityType = getPersonalityType();
    setLocation(`/results/${personalityType}`);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ teto: 0, egen: 0 });
    setGender(null);
    setShuffledQuestions(shuffleArray(questions));
    setLocation("/");
  };

  return {
    currentQuestion,
    scores,
    gender,
    shuffledQuestions,
    selectAnswer,
    getPersonalityType,
    goToResults,
    resetQuiz
  };
}
