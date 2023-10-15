import { useEffect, useState } from "react";

export function useLocalStorage<T>(args: {
  initialValue: T;
  key: string;
}): [T, (next: T) => void] {
  const { initialValue, key } = args;
  const [internalValue, setInternalValue] = useState(initialValue);

  useEffect(
    function initializeFromLocalStorage() {
      const cachedValueString = localStorage.getItem(key);
      if (cachedValueString) {
        try {
          const cachedValue = JSON.parse(cachedValueString);
          setInternalValue(cachedValue);
        } catch (err) {
          console.error(
            `Failed to parse value for key ${key} in localstorage. Value ${cachedValueString}`,
            err
          );
        }
      } else {
        return;
      }
    },
    [key]
  );

  useEffect(
    function cacheInLocalStorage() {
      try {
        localStorage.setItem(key, JSON.stringify(internalValue));
      } catch (err) {
        console.error(
          `Failed to stringify and set value for key ${key} in localstorage. Value ${internalValue}`,
          err
        );
      }
    },
    [key, internalValue]
  );

  return [internalValue, setInternalValue];
}
