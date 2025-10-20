import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounce({ value, delay }: any) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
