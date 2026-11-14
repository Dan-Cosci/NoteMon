import { useEffect, useState } from "react";

export function useDebouce<T>(value: T, delay: number) {
  const [debounced, setdebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setdebounced(value), delay)
    return () => clearTimeout(t)
  }, [value,delay])
  return debounced
}
