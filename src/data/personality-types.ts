export interface PersonalityType {
  type: string;
  emoji: string;
  colorClass: string;
  bgGradient: string;
  title: string;
  analysis: string;
  traits: string[];
  description: string;
  characters: string;
  summary: string;
  compatibility: string;
  loveStyle: string;
}

export const personalityTypes: Record<string, PersonalityType> = {
  "teto_male": {
    type: "테토남",
    emoji: "🦁",
    colorClass: "from-red-500 to-orange-500",
    bgGradient: "bg-gradient-to-r from-red-500 to-orange-500",
    title: "리더십이 강한 남성형",
    analysis: "즉흥적이며 논리 중심적이고 감정 표현보다는 행동으로 보여주는 경향이 강합니다. 전형적인 T(Thinking) 성향이 강하며, 주도적이고 현실적인 테토남으로 분류됩니다.",
    traits: [
      "🎯 목표 지향적이고 추진력이 강함",
      "👥 사교적이며 리더십을 발휘함", 
      "💪 도전을 즐기고 경쟁을 두려워하지 않음",
      "🚀 빠른 결정력과 실행력을 갖춤",
      "🏃‍♂️ 활동적이고 에너지가 넘침"
    ],
    description: "타인의 기대에 휘둘리지 않고, 독립적인 사고를 중시합니다. 누가 뭐라 해도 자신만의 기준이 명확하며, 감정보다 효율을 택하는 타입입니다. 연애에서도 주도적이며 직접적인 표현을 선호합니다.",
    characters: "레이 (에반게리온), 토니 스타크 (아이언맨), 이준기 (태양의 후예)",
    summary: "나는 내 방식대로 살아. 남들이 뭐래도.",
    compatibility: "에겐녀와 가장 잘 맞으며, 테토녀와는 경쟁 관계가 될 수 있습니다.",
    loveStyle: "적극적이고 직접적인 어프로치를 선호하며, 행동으로 사랑을 표현합니다."
  },
  "egen_male": {
    type: "에겐남",
    emoji: "🎨",
    colorClass: "from-purple-500 to-pink-500",
    bgGradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    title: "감성이 풍부한 남성형",
    analysis: "감수성이 뛰어나며 타인의 감정에 민감하게 반응합니다. 예술적 감각이 뛰어나고 내면의 세계를 중시하는 전형적인 F(Feeling) 성향의 에겐남입니다.",
    traits: [
      "🎭 감정 표현이 풍부하고 공감 능력이 뛰어남",
      "🎨 예술적 감각과 창의성을 갖춤",
      "🤝 타인과의 조화와 협력을 중시함",
      "💭 깊이 있는 사고와 철학적 성향",
      "🌸 섬세하고 배려심이 많음"
    ],
    description: "내면의 감정과 감성을 중요시하며, 타인과의 깊은 교감을 추구합니다. 트렌드에 민감하고 미적 감각이 뛰어나며, 섬세한 소통을 선호하는 타입입니다.",
    characters: "이도현 (호텔 델루나), 박서준 (이태원 클라쓰), 차은우 (내 아이디는 강남미인)",
    summary: "감정과 예술이 내 삶을 풍요롭게 만들어.",
    compatibility: "테토녀와 잘 맞으며, 에겐녀와는 비슷한 성향으로 깊은 이해가 가능합니다.",
    loveStyle: "로맨틱하고 감성적인 연애를 선호하며, 세심한 배려와 공감을 중시합니다."
  },
  "teto_female": {
    type: "테토녀", 
    emoji: "⚡",
    colorClass: "from-teal-500 to-blue-500",
    bgGradient: "bg-gradient-to-r from-teal-500 to-blue-500",
    title: "활발하고 독립적인 여성형",
    analysis: "활기차고 능동적인 성향을 보이며, 독립적이고 주관이 뚜렷합니다. 감정보다는 논리적 판단을 우선시하는 테토녀 유형입니다.",
    traits: [
      "💪 독립적이고 자립심이 강함",
      "🏃‍♀️ 활동적이고 도전적인 성격",
      "🎯 명확한 목표 의식과 추진력",
      "👑 리더십이 있고 당당함",
      "⚡ 빠른 판단력과 행동력"
    ],
    description: "전통적인 여성성보다는 자신만의 방식으로 살아가는 것을 선호합니다. 주눅들지 않는 당당함과 강한 정신력을 가지고 있으며, 현실적이고 실용적인 사고를 합니다.",
    characters: "김지원 (태양의 후예), 박민영 (김비서가 왜 그럴까), 전지현 (별에서 온 그대)",
    summary: "내 인생의 주인공은 나야. 당당하게 살아갈거야.",
    compatibility: "테토남과 잘 맞지만 경쟁할 수 있고, 에겐남과는 서로 보완하는 관계입니다.",
    loveStyle: "평등한 관계를 추구하며, 서로의 독립성을 인정하는 연애를 선호합니다."
  },
  "egen_female": {
    type: "에겐녀",
    emoji: "🌺", 
    colorClass: "from-pink-500 to-rose-500",
    bgGradient: "bg-gradient-to-r from-pink-500 to-rose-500",
    title: "온화하고 배려심 많은 여성형",
    analysis: "부드럽고 따뜻한 성격으로 타인을 배려하며 조화를 중시합니다. 감정적이고 직관적인 판단을 선호하는 전형적인 에겐녀 유형입니다.",
    traits: [
      "💕 따뜻하고 배려심이 많음",
      "🌸 부드럽고 온화한 성격",
      "👂 경청을 잘하고 공감 능력이 뛰어남",
      "🎀 섬세하고 감성적임",
      "🤗 타인과의 조화를 중시함"
    ],
    description: "타인의 감정을 세심하게 살피며 배려하는 마음이 깊습니다. 갈등보다는 평화를 선호하고, 감정적인 교감을 통해 깊은 관계를 형성하는 것을 좋아합니다.",
    characters: "송혜교 (태양의 후예), 박신혜 (상속자들), 수지 (당신이 잠든 사이에)",
    summary: "따뜻한 마음으로 모든 사람을 포용하고 싶어.",
    compatibility: "테토남과 가장 이상적인 궁합이며, 에겐남과도 깊은 감정적 교감이 가능합니다.",
    loveStyle: "로맨틱하고 감성적인 연애를 추구하며, 서로를 아끼고 보살피는 관계를 선호합니다."
  }
};
