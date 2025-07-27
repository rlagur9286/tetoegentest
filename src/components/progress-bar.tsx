interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div 
        className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
