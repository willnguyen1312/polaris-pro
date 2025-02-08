import { useState } from "react";
import { useComputed } from "@preact/signals-react";

export default function Preact() {
  const [count, setCount] = useState(0);

  //   const doubleCount = useComputed(() => count * 2);

  const memoizedUI = useComputed(() => {
    // Not updating when count changes
    return <h2>Double Count: {count * 2}</h2>;
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {memoizedUI}
    </div>
  );
}
