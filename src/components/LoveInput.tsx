import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface LoveInputProps {
  onSubmit: (text: string) => void;
}

export const LoveInput = ({ onSubmit }: LoveInputProps) => {
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!text.trim()) {
      toast({
        title: "Please share your thoughts",
        description: "We're here to listen and support you.",
      });
      return;
    }
    onSubmit(text);
    setText("");
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      <Textarea
        placeholder="Share what's on your mind..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-[120px] bg-white/50 backdrop-blur-sm border-primary/20"
      />
      <Button 
        onClick={handleSubmit}
        className="w-full bg-primary hover:bg-primary/90 text-white"
      >
        Transform with Love
      </Button>
    </div>
  );
};