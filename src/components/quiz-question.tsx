import { useState, useEffect } from "react";
import { QuizQuestion } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QuizQuestionProps {
  question: QuizQuestion;
  onAnswer: (value: string) => void;
}

// Fisher-Yates shuffle algorithm for options
function shuffleOptions<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function QuizQuestionComponent({ question, onAnswer }: QuizQuestionProps) {
  const [shuffledOptions, setShuffledOptions] = useState(question.options);

  // Shuffle options when question changes
  useEffect(() => {
    setShuffledOptions(shuffleOptions(question.options));
  }, [question.id]);

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 animate-fade-in">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce-slow">{question.emoji}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Q{question.id}</h2>
          <p className="text-xl text-gray-700 leading-relaxed">{question.text}</p>
        </div>
        
        <div className="space-y-3">
          {shuffledOptions.map((option, index) => (
            <Button
              key={index}
              onClick={() => onAnswer(option.value)}
              className="w-full text-left p-4 h-auto rounded-xl border-2 border-gray-200 bg-white text-gray-800 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] font-medium"
              variant="outline"
            >
              <span className="text-gray-600 mr-2">{String.fromCharCode(65 + index)}.</span>
              {option.text}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
