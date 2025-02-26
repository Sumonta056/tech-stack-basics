import React from "react";
type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
      {children}
    </button>
  );
}

export default Button;
