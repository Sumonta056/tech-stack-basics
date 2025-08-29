import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  rating?: number;
  like?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-5 bg-gray-300 rounded-lg">
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
      <button
        className="px-3 py-1 text-2xl rounded-md"
        onClick={() => setHasLiked(!hasLiked)}
      >
        {hasLiked ? "🤍" : "💓"}
      </button>
    </div>
  );
};

export default Card;
