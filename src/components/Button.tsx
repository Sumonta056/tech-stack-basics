import React from "react";

type ButtonProps = {
  icon: React.ReactNode;
  name: string;
  bgColor: string;
  padding: "px-4 py-2" | "px-6 py-3" | "px-2 py-1";
  size?: "small" | "medium" | "large";
  onClick: () => void;
};

const Button = ({
  icon,
  name,
  bgColor,
  padding,
  size = "medium",
  onClick,
}: ButtonProps) => {
  let fontSize = "text-base";
  if (size === "small") fontSize = "text-sm";
  if (size === "large") fontSize = "text-xl";

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${padding} ${fontSize} ${bgColor} text-white font-semibold rounded-lg shadow-md hover:${bgColor} transition`}
    >
      {icon}
      {name}
    </button>
  );
};

export default Button;
