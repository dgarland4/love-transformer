import { cn } from "@/lib/utils";

interface LoveResponseProps {
  message: string;
  imageUrl: string;
}

const getPositiveInterpretation = (message: string) => {
  console.log("Generating positive interpretation for:", message);
  return "I hear you sharing your thoughts and feelings. Your openness shows courage and self-awareness.";
};

export const LoveResponse = ({ message, imageUrl }: LoveResponseProps) => {
  const fullMessage = `${message} I love you.`;
  const interpretation = getPositiveInterpretation(message);
  
  return (
    <div className="animate-fade-in space-y-4 w-full max-w-md">
      <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm mb-4">
        <p className="text-primary-foreground/90 italic">
          {interpretation}
        </p>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt="Uplifting imagery"
          className="w-full h-48 object-cover"
        />
      </div>
      <p className="text-lg text-primary-foreground bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
        {fullMessage}
      </p>
    </div>
  );
};