import { useState } from "react";

export default function Control() {
  //   const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}

      <input
        type="checkbox"
        // checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
}
