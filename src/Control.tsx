import { useState } from "react";
import { TextField } from "@shopify/polaris";

export default function Control() {
  const [input, setInput] = useState("");

  return (
    <div>
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}

      <TextField
        name="input"
        autoComplete="off"
        label="Input"
        value={input}
        onChange={(value) => {
          console.log(value);
          setInput(value);
        }}
      />
    </div>
  );
}
