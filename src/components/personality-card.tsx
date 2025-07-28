import { Card, CardContent } from "@/components/ui/card";

interface PersonalityCardProps {
  emoji: string;
  title: string;
  description: string;
  colorClass: string;
  image?: string;
}

export function PersonalityCard({ emoji, title, description, colorClass, image }: PersonalityCardProps) {
  return (
    <Card className={`bg-gradient-to-br ${colorClass} rounded-2xl text-white transform hover:scale-105 transition-all duration-300 cursor-pointer`}>
      <CardContent className="p-4">
        {image ? (
          <div className="flex justify-center mb-2">
            <img 
              src={image} 
              alt={title} 
              className="w-16 h-16 object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="text-3xl mb-2">{emoji}</div>
        )}
        <h4 className="font-bold text-lg text-center">{title}</h4>
        <p className="text-sm opacity-90 text-center">{description}</p>
      </CardContent>
    </Card>
  );
}
