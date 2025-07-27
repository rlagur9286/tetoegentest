import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalityCard } from "@/components/personality-card";

export default function Home() {
  const [, setLocation] = useLocation();

  const startTest = () => {
    setLocation("/quiz");
  };

  return (
    <div className="min-h-screen flex flex-col font-korean">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-6 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-2 animate-fade-in">🧬 테토-에겐 테스트</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90">나의 연애 DNA를 찾아보세요!</p>
          <div className="flex justify-center items-center mt-4 space-x-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">🔥 인기</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">✨ 정확도 95%</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">⚡ 3분 완성</span>
          </div>
        </div>
        {/* Floating decoration elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse-slow"></div>
      </header>

      {/* Introduction Section */}
      <section className="flex-1 px-6 py-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Explanation */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 테토-에겐 성격 유형이란?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  테스토스테론(테토)과 에스트로겐(에겐)의 행동적 특성을 바탕으로 
                  성격과 연애 스타일을 분석하는 새로운 심리 분석 도구입니다.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 text-white p-3 rounded-xl text-center">
                    <div className="text-2xl mb-1">💪</div>
                    <div className="font-semibold text-sm">테토형</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-white p-3 rounded-xl text-center">
                    <div className="text-2xl mb-1">🌸</div>
                    <div className="font-semibold text-sm">에겐형</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 이런 분들께 추천!</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>내 연애 스타일이 궁금한 분</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>상대방과의 궁합을 알고 싶은 분</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>새로운 자아 발견을 원하는 분</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>재미있는 심리 테스트를 좋아하는 분</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right: Preview Cards */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold text-center mb-6">🔮 4가지 성격 유형</h3>
            <div className="grid grid-cols-2 gap-4">
              <PersonalityCard
                emoji="🦁"
                title="테토남"
                description="리더십 강한 남성"
                colorClass="from-red-500 to-orange-500"
              />
              <PersonalityCard
                emoji="🎨"
                title="에겐남"
                description="감성적인 남성"
                colorClass="from-purple-500 to-pink-500"
              />
              <PersonalityCard
                emoji="⚡"
                title="테토녀"
                description="활발한 여성"
                colorClass="from-teal-500 to-blue-500"
              />
              <PersonalityCard
                emoji="🌺"
                title="에겐녀"
                description="온화한 여성"
                colorClass="from-pink-500 to-rose-500"
              />
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={startTest}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xl font-bold py-4 px-12 h-auto rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
          >
            🚀 테스트 시작하기
          </Button>
          <p className="text-gray-500 text-sm mt-4">⏱️ 약 3분 소요 | 🎯 총 17개 문항</p>
        </div>
      </section>
    </div>
  );
}
