import { useEffect } from "react";
import { useLocation } from "wouter";
import { questions, genderQuestion } from "@/data/questions";
import { QuizQuestionComponent } from "@/components/quiz-question";
import { ProgressBar } from "@/components/progress-bar";
import { useQuiz } from "@/hooks/use-quiz";

export default function Quiz() {
  const [, setLocation] = useLocation();
  const { currentQuestion, selectAnswer, goToResults } = useQuiz();
  
  const totalQuestions = questions.length + 1; // +1 for gender question

  useEffect(() => {
    if (currentQuestion >= totalQuestions) {
      setTimeout(() => {
        goToResults();
      }, 300);
    }
  }, [currentQuestion, totalQuestions, goToResults]);

  if (currentQuestion >= totalQuestions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce-slow">🔄</div>
          <p className="text-xl text-gray-600">결과를 분석하고 있습니다...</p>
        </div>
      </div>
    );
  }

  const handleAnswer = (value: string) => {
    selectAnswer(value);
  };

  const currentQuestionData = currentQuestion < questions.length 
    ? questions[currentQuestion] 
    : genderQuestion;

  return (
    <div className="min-h-screen font-korean">
      {/* Progress Header */}
      <header className="bg-white shadow-sm border-b-2 border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-800">테토-에겐 성격 테스트</h1>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
              {currentQuestion + 1}/{totalQuestions}
            </span>
          </div>
          <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
        </div>
      </header>

      {/* Question Container */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <QuizQuestionComponent 
          question={currentQuestionData} 
          onAnswer={handleAnswer}
        />
      </main>
    </div>
  );
}
