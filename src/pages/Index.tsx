import { useState } from "react";
import { LoveInput } from "@/components/LoveInput";
import { LoveResponse } from "@/components/LoveResponse";

const POSITIVE_RESPONSES = [
  {
    message: "Your feelings are valid. Let's transform this energy into something beautiful.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
  {
    message: "I hear your frustration. Remember, you are worthy of peace and joy.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
  },
  {
    message: "Take a deep breath. Every moment is a chance to begin again with love.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
];

const Index = () => {
  const [response, setResponse] = useState<typeof POSITIVE_RESPONSES[0] | null>(null);

  const handleSubmit = (text: string) => {
    // For now, randomly select a positive response
    const randomResponse = POSITIVE_RESPONSES[Math.floor(Math.random() * POSITIVE_RESPONSES.length)];
    setResponse(randomResponse);
    console.log("Received text:", text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-primary/10 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary-foreground">Transform with Love</h1>
          <p className="text-lg text-primary-foreground/80">
            Share your thoughts, and let's transform them into something beautiful
          </p>
        </header>
        
        <div className="flex flex-col items-center space-y-8">
          <LoveInput onSubmit={handleSubmit} />
          {response && <LoveResponse message={response.message} imageUrl={response.image} />}
        </div>
      </div>
    </div>
  );
};

export default Index;