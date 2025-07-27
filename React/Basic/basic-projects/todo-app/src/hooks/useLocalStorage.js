import { useEffect, useState } from "react";

export function useLocalStorage(key, initialVal) {
  const [storedVal, setStoredVal] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) :  initialVal;
    } catch(err) {
      console.error(err)
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedVal));
  }, [key, storedVal]);
  return [storedVal, setStoredVal];
}

