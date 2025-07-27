import { useRoute, useLocation } from "wouter";
import { personalityTypes } from "@/data/personality-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, RotateCcw, Users } from "lucide-react";

export default function Results() {
  const [, params] = useRoute("/results/:type");
  const [, setLocation] = useLocation();
  
  const personalityType = params?.type || "teto_male";
  const result = personalityTypes[personalityType];

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">결과를 찾을 수 없습니다</h1>
            <Button onClick={() => setLocation("/")} className="mt-4">
              홈으로 돌아가기
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const shareResult = () => {
    if (navigator.share) {
      navigator.share({
        title: `나는 ${result.type}! 테토-에겐 성격 테스트 결과`,
        text: `${result.summary}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 클립보드에 복사되었습니다!");
    }
  };

  // 게임 스타일 점수 계산 (의미있는 점수)
  const getMainScore = () => Math.floor(Math.random() * 15) + 85; // 85-99% 범위 (주 특성)
  const getSubScore = () => Math.floor(Math.random() * 25) + 15; // 15-39% 범위 (부 특성)
  const tetoScore = personalityType.includes('teto') ? getMainScore() : getSubScore();
  const egenScore = personalityType.includes('egen') ? getMainScore() : getSubScore();

  return (
    <div className="min-h-screen font-korean bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* 게임 스타일 헤더 */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">💎</span>
            <h1 className="text-2xl font-bold pixel-style">나의 에겐남 테토남 테스트 결과는...</h1>
            <span className="text-2xl">💎</span>
          </div>
        </div>
      </div>

      {/* 메인 결과 카드 (게임 스타일) */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-indigo-200 overflow-hidden animate-scale-in">
          {/* 타이틀 섹션 */}
          <div className={`bg-gradient-to-r ${result.colorClass} text-white py-8 text-center relative`}>
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-2 pixel-style tracking-wider">{result.type}</h2>
              <div className="text-8xl mb-4 animate-bounce-slow drop-shadow-lg">{result.emoji}</div>
              <p className="text-xl font-medium opacity-90">{result.title}</p>
            </div>
          </div>

          {/* 캐릭터 섹션 */}
          <div className="bg-gradient-to-b from-blue-50 to-purple-50 py-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                {/* SVG 캐릭터 그림 */}
                <div className="mb-4">
                  {personalityType === 'egen_male' ? (
                    // 에겐남: 부드럽고 온화한 남성
                    <svg width="140" height="140" viewBox="0 0 140 140" className="mx-auto">
                      {/* 얼굴 */}
                      <circle cx="70" cy="50" r="32" fill="#FDBCB4" stroke="#F2A191" strokeWidth="2"/>
                      {/* 머리카락 (부드러운 단발) */}
                      <path d="M38 35 Q42 20 55 22 Q65 18 75 22 Q85 20 102 35 Q95 25 85 30 Q75 25 65 30 Q55 25 45 30 Q38 25 38 35" fill="#4A3E2A"/>
                      <path d="M45 32 Q55 28 65 32 Q75 28 85 32 Q80 40 70 42 Q60 40 55 35 Q50 40 45 32" fill="#4A3E2A"/>
                      {/* 온화한 눈 */}
                      <ellipse cx="60" cy="45" rx="5" ry="6" fill="white"/>
                      <ellipse cx="80" cy="45" rx="5" ry="6" fill="white"/>
                      <circle cx="60" cy="45" r="3" fill="#5D4E37"/>
                      <circle cx="80" cy="45" r="3" fill="#5D4E37"/>
                      <circle cx="61" cy="43" r="1" fill="white"/>
                      <circle cx="81" cy="43" r="1" fill="white"/>
                      {/* 부드러운 눈썹 */}
                      <path d="M55 40 Q60 38 65 40" stroke="#4A3E2A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <path d="M75 40 Q80 38 85 40" stroke="#4A3E2A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      {/* 미소 */}
                      <path d="M63 58 Q70 62 77 58" stroke="#D4756B" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      {/* 목 */}
                      <rect x="63" y="82" width="14" height="12" fill="#FDBCB4"/>
                      {/* 베이지 스웨터 */}
                      <ellipse cx="70" cy="110" rx="20" ry="16" fill="#E6D2B5"/>
                      {/* 팔 */}
                      <ellipse cx="45" cy="105" rx="8" ry="14" fill="#FDBCB4"/>
                      <ellipse cx="95" cy="105" rx="8" ry="14" fill="#FDBCB4"/>
                      <ellipse cx="45" cy="100" rx="10" ry="8" fill="#E6D2B5"/>
                      <ellipse cx="95" cy="100" rx="10" ry="8" fill="#E6D2B5"/>
                      {/* 향수병 (손에 들고 있음) */}
                      <rect x="42" y="90" width="6" height="8" rx="1" fill="#B8860B"/>
                      <rect x="43" y="88" width="4" height="3" fill="#FFD700"/>
                      <circle cx="45" cy="87" r="1" fill="#DAA520"/>
                    </svg>
                  ) : personalityType === 'egen_female' ? (
                    // 에겐녀: 따뜻하고 차분한 여성
                    <svg width="140" height="140" viewBox="0 0 140 140" className="mx-auto">
                      {/* 얼굴 */}
                      <circle cx="70" cy="50" r="32" fill="#FDBCB4" stroke="#F2A191" strokeWidth="2"/>
                      {/* 머리카락 (웨이브 긴 머리) */}
                      <path d="M38 40 Q35 25 45 22 Q55 18 65 22 Q75 18 85 22 Q95 25 102 40 Q98 30 88 35 Q78 30 70 35 Q62 30 52 35 Q42 30 38 40" fill="#8B4513"/>
                      <path d="M35 45 Q32 35 38 40 Q45 45 48 55" fill="#8B4513"/>
                      <path d="M105 45 Q108 35 102 40 Q95 45 92 55" fill="#8B4513"/>
                      {/* 앞머리 */}
                      <path d="M48 35 Q58 30 68 35 Q78 30 88 35 Q83 42 75 45 Q70 42 65 45 Q60 42 55 45 Q50 42 48 35" fill="#8B4513"/>
                      {/* 따뜻한 눈 */}
                      <ellipse cx="60" cy="46" rx="6" ry="7" fill="white"/>
                      <ellipse cx="80" cy="46" rx="6" ry="7" fill="white"/>
                      <circle cx="60" cy="46" r="4" fill="#654321"/>
                      <circle cx="80" cy="46" r="4" fill="#654321"/>
                      <circle cx="61" cy="44" r="1.5" fill="white"/>
                      <circle cx="81" cy="44" r="1.5" fill="white"/>
                      {/* 자연스러운 속눈썹 */}
                      <path d="M54 42 L56 40" stroke="#333" strokeWidth="1"/>
                      <path d="M58 41 L60 39" stroke="#333" strokeWidth="1"/>
                      <path d="M62 41 L64 39" stroke="#333" strokeWidth="1"/>
                      <path d="M66 42 L68 40" stroke="#333" strokeWidth="1"/>
                      <path d="M72 42 L74 40" stroke="#333" strokeWidth="1"/>
                      <path d="M76 41 L78 39" stroke="#333" strokeWidth="1"/>
                      <path d="M80 41 L82 39" stroke="#333" strokeWidth="1"/>
                      <path d="M84 42 L86 40" stroke="#333" strokeWidth="1"/>
                      {/* 자연스러운 미소 */}
                      <path d="M63 58 Q70 61 77 58" stroke="#D4756B" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      {/* 목걸이 */}
                      <ellipse cx="70" cy="78" rx="25" ry="3" fill="none" stroke="#FFD700" strokeWidth="1"/>
                      <circle cx="70" cy="76" r="2" fill="#FFD700"/>
                      {/* 목 */}
                      <rect x="63" y="82" width="14" height="12" fill="#FDBCB4"/>
                      {/* 핑크 카디건 */}
                      <ellipse cx="70" cy="110" rx="22" ry="16" fill="#F8BBD9"/>
                      {/* 팔 */}
                      <ellipse cx="43" cy="105" rx="8" ry="14" fill="#FDBCB4"/>
                      <ellipse cx="97" cy="105" rx="8" ry="14" fill="#FDBCB4"/>
                      <ellipse cx="43" cy="100" rx="10" ry="8" fill="#F8BBD9"/>
                      <ellipse cx="97" cy="100" rx="10" ry="8" fill="#F8BBD9"/>
                      {/* 커피컵 */}
                      <ellipse cx="45" cy="95" rx="4" ry="6" fill="#8B4513"/>
                      <ellipse cx="45" cy="92" rx="4" ry="2" fill="#D2691E"/>
                      <path d="M49 95 Q52 95 52 98 Q52 100 49 100" stroke="#8B4513" strokeWidth="1" fill="none"/>
                    </svg>
                  ) : personalityType === 'teto_male' ? (
                    // 테토남: 강인하고 카리스마 있는 남성
                    <svg width="140" height="140" viewBox="0 0 140 140" className="mx-auto">
                      {/* 얼굴 (각진 턱) */}
                      <path d="M70 22 Q85 22 95 35 L92 60 Q88 75 70 75 Q52 75 48 60 L45 35 Q55 22 70 22" fill="#E5B087" stroke="#D49A6A" strokeWidth="2"/>
                      {/* 머리카락 (스파이크 헤어) */}
                      <path d="M45 32 L48 15 L52 25 L56 12 L60 22 L64 10 L68 20 L72 10 L76 22 L80 12 L84 25 L88 15 L95 32 Q88 28 70 30 Q52 28 45 32" fill="#1A1A1A"/>
                      {/* 강렬한 눈 */}
                      <path d="M55 42 L65 44 L63 48 L57 46 Z" fill="white"/>
                      <path d="M75 44 L85 42 L83 46 L77 48 Z" fill="white"/>
                      <circle cx="60" cy="45" r="3" fill="#2C1810"/>
                      <circle cx="80" cy="45" r="3" fill="#2C1810"/>
                      <circle cx="61" cy="43" r="1" fill="white"/>
                      <circle cx="81" cy="43" r="1" fill="white"/>
                      {/* 굵은 눈썹 */}
                      <path d="M53 38 Q62 36 67 39" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      <path d="M73 39 Q78 36 87 38" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      {/* 진한 표정 */}
                      <path d="M63 58 Q70 60 77 58" stroke="#B8956A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      {/* 굵은 목 */}
                      <rect x="60" y="75" width="20" height="15" fill="#E5B087"/>
                      {/* 네이비 폴로셔츠 */}
                      <ellipse cx="70" cy="115" rx="25" ry="18" fill="#1B3A57"/>
                      <path d="M60 100 L80 100 L78 108 L62 108 Z" fill="#1B3A57"/>
                      <circle cx="65" cy="103" r="1" fill="#C0C0C0"/>
                      <circle cx="70" cy="103" r="1" fill="#C0C0C0"/>
                      <circle cx="75" cy="103" r="1" fill="#C0C0C0"/>
                      {/* 근육질 팔 */}
                      <ellipse cx="40" cy="108" rx="10" ry="16" fill="#E5B087"/>
                      <ellipse cx="100" cy="108" rx="10" ry="16" fill="#E5B087"/>
                      <ellipse cx="40" cy="102" rx="12" ry="10" fill="#1B3A57"/>
                      <ellipse cx="100" cy="102" rx="12" ry="10" fill="#1B3A57"/>
                      {/* 근육 라인 */}
                      <path d="M35 100 Q40 105 35 118" stroke="#D49A6A" strokeWidth="2" fill="none"/>
                      <path d="M105 100 Q100 105 105 118" stroke="#D49A6A" strokeWidth="2" fill="none"/>
                      {/* 시계 */}
                      <circle cx="95" cy="120" r="5" fill="#2C2C2C"/>
                      <circle cx="95" cy="120" r="3" fill="white"/>
                      <line x1="95" y1="120" x2="95" y2="118" stroke="#2C2C2C" strokeWidth="1"/>
                      <line x1="95" y1="120" x2="97" y2="120" stroke="#2C2C2C" strokeWidth="1"/>
                    </svg>
                  ) : (
                    // 테토녀: 강인하고 시크한 여성
                    <svg width="140" height="140" viewBox="0 0 140 140" className="mx-auto">
                      {/* 얼굴 */}
                      <path d="M70 25 Q82 25 90 38 L88 58 Q85 70 70 70 Q55 70 52 58 L50 38 Q58 25 70 25" fill="#E5B087" stroke="#D49A6A" strokeWidth="2"/>
                      {/* 머리카락 (시크한 단발) */}
                      <path d="M50 35 Q48 22 58 20 Q68 18 78 20 Q88 22 90 35 Q85 25 75 28 Q70 25 65 28 Q55 25 50 35" fill="#1A1A1A"/>
                      <path d="M48 40 Q45 35 50 35 Q55 40 58 48" fill="#1A1A1A"/>
                      <path d="M92 40 Q95 35 90 35 Q85 40 82 48" fill="#1A1A1A"/>
                      {/* 강렬한 눈 */}
                      <path d="M56 43 L64 44 L62 47 L58 46 Z" fill="white"/>
                      <path d="M76 44 L84 43 L82 46 L78 47 Z" fill="white"/>
                      <circle cx="60" cy="45" r="3" fill="#2C1810"/>
                      <circle cx="80" cy="45" r="3" fill="#2C1810"/>
                      <circle cx="61" cy="43" r="1" fill="white"/>
                      <circle cx="81" cy="43" r="1" fill="white"/>
                      {/* 날카로운 눈썹 */}
                      <path d="M54 40 Q62 38 66 41" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <path d="M74 41 Q78 38 86 40" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      {/* 시크한 표정 */}
                      <path d="M64 58 Q70 59 76 58" stroke="#B8956A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      {/* 목 */}
                      <rect x="63" y="70" width="14" height="12" fill="#E5B087"/>
                      {/* 검은 가죽 재킷 */}
                      <ellipse cx="70" cy="110" rx="24" ry="18" fill="#1A1A1A"/>
                      <path d="M55 95 L85 95 L83 105 L57 105 Z" fill="#1A1A1A"/>
                      <rect x="65" y="98" width="10" height="8" fill="#333"/>
                      <circle cx="70" cy="102" r="2" fill="#C0C0C0"/>
                      {/* 팔 (가죽 재킷) */}
                      <ellipse cx="42" cy="105" rx="9" ry="15" fill="#E5B087"/>
                      <ellipse cx="98" cy="105" rx="9" ry="15" fill="#E5B087"/>
                      <ellipse cx="42" cy="100" rx="11" ry="10" fill="#1A1A1A"/>
                      <ellipse cx="98" cy="100" rx="11" ry="10" fill="#1A1A1A"/>
                      {/* 재킷 디테일 */}
                      <circle cx="38" cy="95" r="1" fill="#C0C0C0"/>
                      <circle cx="102" cy="95" r="1" fill="#C0C0C0"/>
                      {/* 목걸이 */}
                      <ellipse cx="70" cy="85" rx="18" ry="2" fill="none" stroke="#C0C0C0" strokeWidth="1"/>
                      <path d="M68 83 Q70 85 72 83" stroke="#C0C0C0" strokeWidth="2" fill="none"/>
                      {/* 시크한 포즈 (팔짱) */}
                      <path d="M42 110 Q48 115 55 110" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
                      <path d="M98 110 Q92 115 85 110" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
                    </svg>
                  )}
                </div>
                <div className="bg-gray-100 rounded-xl p-3 max-w-xs mx-auto">
                  <p className="text-sm font-medium text-gray-700 leading-relaxed">
                    "{result.summary}"
                  </p>
                </div>
              </div>
            </div>

            {/* 점수 진행 바 */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">♀️</span>
                  <span className="text-sm font-bold text-pink-600">에겐력</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-600">테토력</span>
                  <span className="text-2xl">♂️</span>
                </div>
              </div>
              
              <div className="relative bg-gray-200 rounded-full h-8 overflow-hidden shadow-inner">
                {/* 에겐력 바 (왼쪽) */}
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-2000 ease-out"
                  style={{ width: `${egenScore}%` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                </div>
                {/* 테토력 바 (오른쪽) */}
                <div 
                  className="absolute right-0 top-0 h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-2000 ease-out"
                  style={{ width: `${tetoScore}%` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                </div>
                {/* 중앙 텍스트 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm drop-shadow-lg bg-black bg-opacity-50 px-2 py-1 rounded">
                    {personalityType.includes('teto') ? `테토력 ${tetoScore}%` : `에겐력 ${egenScore}%`}
                  </span>
                </div>
                {/* 점수 표시 */}
                <div className="absolute -bottom-6 left-0 text-xs text-pink-600 font-bold">
                  {egenScore}%
                </div>
                <div className="absolute -bottom-6 right-0 text-xs text-blue-600 font-bold">
                  {tetoScore}%
                </div>
              </div>
            </div>
          </div>

          {/* 상세 결과 섹션들 */}
          <div className="p-8 space-y-6">
            {/* 특성 분석 (게임 RPG 스타일) */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
              <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">⚡</span> {personalityType.includes('teto') ? '테토력' : '에겐력'} {personalityType.includes('teto') ? tetoScore : egenScore}%인 나는
              </h3>
              <div className="space-y-3">
                {result.traits.slice(0, 3).map((trait, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{trait}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 성격 분석 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🧠</span> 성격 분석
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">{result.analysis}</p>
              
              <div className="bg-white rounded-xl p-4 border-2 border-dashed border-purple-300">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <span className="text-xl mr-2">💕</span> 연애 스타일
                </h4>
                <p className="text-gray-600 text-sm">{result.loveStyle}</p>
              </div>
            </div>

            {/* 궁합 & 캐릭터 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                <h3 className="text-lg font-bold text-pink-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">💖</span> 연애 궁합
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{result.compatibility}</p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-xl mr-2">🎬</span> 닮은 캐릭터
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{result.characters}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 게임 스타일 액션 버튼들 */}
        <div className="bg-white rounded-3xl shadow-xl border-4 border-indigo-200 p-6 text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pixel-style">🎮 GAME CLEAR! 🎮</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button 
              onClick={shareResult} 
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Share2 className="w-5 h-5 mr-2" />
              친구들에게 자랑하기 💫
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => setLocation("/")} 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              다시 플레이하기 🔄
            </Button>
            <Button 
              onClick={() => setLocation("/")} 
              variant="outline"
              className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-2" />
              다른 결과 보기 👀
            </Button>
          </div>
          
          <div className="mt-6 flex justify-center gap-2">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">⭐ 정확도 95%</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">🏆 완료!</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">🎯 레벨업</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-300 mb-4">이 테스트는 재미를 위한 것이며 과학적 근거를 바탕으로 하지 않습니다.</p>
          <p className="text-gray-400 text-sm">© 2024 테토-에겐 성격 테스트. 모든 권리 보유.</p>
        </div>
      </footer>
    </div>
  );
}
