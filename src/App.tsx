import { ActionList, Box, Button, Popover } from "@shopify/polaris";
import { useCallback, useEffect, useRef, useState } from "react";

window.addEventListener("click", () => {
  alert("window click");
});

document.addEventListener("click", () => {
  alert("document click");
});

export default function App() {
  const boxRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log("App mounted");

    console.log("boxRef.current", boxRef.current);

    console.log("buttonRef.current", buttonRef.current);
  }, []);

  return (
    <div>
      <Box ref={boxRef}>
        <PopoverWithActionListExample />
        <PopoverWithActionListExample />
      </Box>

      {/* <Button ref={buttonRef}>Hi button</Button> */}
    </div>
  );
}

function PopoverWithActionListExample() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator = (
    <div
      onClick={(e) => {
        e.stopPropagation();
        window.dispatchEvent(new CustomEvent("click"));
      }}
    >
      <Button
        onClick={() => {
          togglePopoverActive();
        }}
        disclosure
      >
        More actions
      </Button>
    </div>
  );

  return (
    <div style={{ height: "250px" }}>
      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <ActionList
          actionRole="menuitem"
          items={[{ content: "Import" }, { content: "Export" }]}
        />
      </Popover>
    </div>
  );
}
