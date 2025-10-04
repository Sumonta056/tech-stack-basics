import { useRef } from "react";

function Main() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <input type="text" ref={inputRef} className=" rounded-md p-2" />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white rounded-md p-2"
      >
        Focus
      </button>
    </div>
  );
}

export default Main;
