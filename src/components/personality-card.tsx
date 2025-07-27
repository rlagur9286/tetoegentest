import { Card, CardContent } from "@/components/ui/card";

interface PersonalityCardProps {
  emoji: string;
  title: string;
  description: string;
  colorClass: string;
}

export function PersonalityCard({ emoji, title, description, colorClass }: PersonalityCardProps) {
  return (
    <Card className={`bg-gradient-to-br ${colorClass} rounded-2xl text-white transform hover:scale-105 transition-all duration-300 cursor-pointer`}>
      <CardContent className="p-4">
        <div className="text-3xl mb-2">{emoji}</div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm opacity-90">{description}</p>
      </CardContent>
    </Card>
  );
}
