import { useEffect, useState, useCallback } from "react";
export function useCounter(initialValue = 0) {
   
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        setCount(initialValue);          
    }, [initialValue]);

    // Dùng functional update để tránh stale closures
  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}