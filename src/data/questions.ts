export interface QuizQuestion {
  id: number;
  text: string;
  emoji: string;
  options: {
    text: string;
    value: "teto" | "egen" | "middle";
  }[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: "친구들과의 모임에서 나는...",
    emoji: "👥",
    options: [
      { text: "주도적으로 분위기를 이끌어간다", value: "teto" },
      { text: "분위기에 맞춰 자연스럽게 참여한다", value: "middle" },
      { text: "조용히 대화를 들으며 참여한다", value: "egen" }
    ]
  },
  {
    id: 2,
    text: "갈등 상황이 생겼을 때 나는...",
    emoji: "⚡",
    options: [
      { text: "직접적으로 문제를 해결하려 한다", value: "teto" },
      { text: "상황을 지켜보며 적절한 때를 기다린다", value: "middle" },
      { text: "감정적으로 상처받고 피하고 싶어진다", value: "egen" }
    ]
  },
  {
    id: 3,
    text: "새로운 환경에 적응할 때 나는...",
    emoji: "🌟",
    options: [
      { text: "빠르게 적응하고 주변을 탐색한다", value: "teto" },
      { text: "시간을 두고 천천히 적응한다", value: "middle" },
      { text: "불안하고 조심스럽게 행동한다", value: "egen" }
    ]
  },
  {
    id: 4,
    text: "연애할 때 나의 스타일은...",
    emoji: "💕",
    options: [
      { text: "적극적으로 먼저 다가간다", value: "teto" },
      { text: "상황에 따라 유연하게 행동한다", value: "middle" },
      { text: "상대방이 먼저 다가오길 기다린다", value: "egen" }
    ]
  },
  {
    id: 5,
    text: "스트레스를 받을 때 나는...",
    emoji: "😤",
    options: [
      { text: "운동이나 활동으로 해소한다", value: "teto" },
      { text: "친구들과 대화로 해소한다", value: "middle" },
      { text: "혼자만의 시간으로 해소한다", value: "egen" }
    ]
  },
  {
    id: 6,
    text: "의사결정을 할 때 나는...",
    emoji: "🤔",
    options: [
      { text: "직감과 논리로 빠르게 결정한다", value: "teto" },
      { text: "여러 의견을 들어본 후 결정한다", value: "middle" },
      { text: "감정과 직관을 중심으로 결정한다", value: "egen" }
    ]
  },
  {
    id: 7,
    text: "취미 활동을 선택할 때 나는...",
    emoji: "🎪",
    options: [
      { text: "활동적이고 도전적인 것을 선호한다", value: "teto" },
      { text: "사람들과 함께하는 활동을 선호한다", value: "middle" },
      { text: "조용하고 창의적인 것을 선호한다", value: "egen" }
    ]
  },
  {
    id: 8,
    text: "감정 표현에 대한 나의 성향은...",
    emoji: "😊",
    options: [
      { text: "행동으로 감정을 표현한다", value: "teto" },
      { text: "상황에 맞게 표현한다", value: "middle" },
      { text: "말과 섬세한 표현으로 감정을 전한다", value: "egen" }
    ]
  },
  {
    id: 9,
    text: "패션과 외모 관리에 대해서는...",
    emoji: "👗",
    options: [
      { text: "실용적이고 간편한 스타일을 선호한다", value: "teto" },
      { text: "TPO에 맞는 적절한 스타일을 선택한다", value: "middle" },
      { text: "트렌디하고 세련된 스타일에 관심이 많다", value: "egen" }
    ]
  },
  {
    id: 10,
    text: "친구 관계에서 나는...",
    emoji: "🤝",
    options: [
      { text: "넓고 다양한 인간관계를 유지한다", value: "teto" },
      { text: "적당한 수의 친구들과 관계를 유지한다", value: "middle" },
      { text: "소수의 깊은 친구 관계를 선호한다", value: "egen" }
    ]
  },
  {
    id: 11,
    text: "계획을 세울 때 나는...",
    emoji: "📋",
    options: [
      { text: "큰 틀만 정하고 즉흥적으로 행동한다", value: "teto" },
      { text: "기본 계획을 세우되 유연하게 조정한다", value: "middle" },
      { text: "세세한 부분까지 신중하게 계획한다", value: "egen" }
    ]
  },
  {
    id: 12,
    text: "타인의 의견에 대해 나는...",
    emoji: "💭",
    options: [
      { text: "내 의견을 확실하게 표현한다", value: "teto" },
      { text: "상대방 의견도 고려하며 소통한다", value: "middle" },
      { text: "타인의 의견에 공감하며 맞춰준다", value: "egen" }
    ]
  },
  {
    id: 13,
    text: "경쟁 상황에서 나는...",
    emoji: "🏆",
    options: [
      { text: "이기려고 적극적으로 노력한다", value: "teto" },
      { text: "최선을 다하되 결과에 연연하지 않는다", value: "middle" },
      { text: "경쟁보다는 협력을 선호한다", value: "egen" }
    ]
  },
  {
    id: 14,
    text: "휴식 시간에 나는...",
    emoji: "🛋️",
    options: [
      { text: "활동적인 것을 하며 시간을 보낸다", value: "teto" },
      { text: "상황에 따라 다양하게 휴식한다", value: "middle" },
      { text: "조용히 혼자만의 시간을 즐긴다", value: "egen" }
    ]
  },
  {
    id: 15,
    text: "문제 해결 방식에 있어서 나는...",
    emoji: "🔧",
    options: [
      { text: "실용적이고 효과적인 방법을 선호한다", value: "teto" },
      { text: "여러 관점에서 종합적으로 접근한다", value: "middle" },
      { text: "창의적이고 감성적인 접근을 선호한다", value: "egen" }
    ]
  },
  {
    id: 16,
    text: "소셜미디어 사용 패턴은...",
    emoji: "📱",
    options: [
      { text: "소식을 빠르게 확인하고 간단히 소통한다", value: "teto" },
      { text: "적당히 활용하며 필요할 때 사용한다", value: "middle" },
      { text: "감성적인 콘텐츠를 올리고 세심하게 관리한다", value: "egen" }
    ]
  },
  {
    id: 17,
    text: "음악 취향에 대해서는...",
    emoji: "🎵",
    options: [
      { text: "신나고 에너지 넘치는 음악을 선호한다", value: "teto" },
      { text: "다양한 장르를 상황에 맞게 듣는다", value: "middle" },
      { text: "감성적이고 서정적인 음악을 좋아한다", value: "egen" }
    ]
  }
];

export const genderQuestion = {
  id: 18,
  text: "나의 성별은?",
  emoji: "⚧️",
  options: [
    { text: "남성", value: "male" },
    { text: "여성", value: "female" }
  ]
};
