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
    <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-lg bg-rose-200">
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
      <button
        className="px-3 py-1 text-sm text-white rounded-md bg-rose-500"
        onClick={() => setHasLiked(!hasLiked)}
      >
        {hasLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Card;
