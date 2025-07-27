import { useState } from "react";
import { useLocation } from "wouter";

export interface QuizScores {
  teto: number;
  egen: number;
}

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<QuizScores>({ teto: 0, egen: 0 });
  const [gender, setGender] = useState<string | null>(null);
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
    setLocation("/");
  };

  return {
    currentQuestion,
    scores,
    gender,
    selectAnswer,
    getPersonalityType,
    goToResults,
    resetQuiz
  };
}
