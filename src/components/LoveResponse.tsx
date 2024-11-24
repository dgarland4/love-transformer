import { cn } from "@/lib/utils";

interface LoveResponseProps {
  message: string;
  imageUrl: string;
}

export const LoveResponse = ({ message, imageUrl }: LoveResponseProps) => {
  return (
    <div className="animate-fade-in space-y-4 w-full max-w-md">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt="Uplifting imagery"
          className="w-full h-48 object-cover"
        />
      </div>
      <p className="text-lg text-primary-foreground bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
        {message}
      </p>
    </div>
  );
};