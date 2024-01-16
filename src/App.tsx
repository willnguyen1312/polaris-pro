import { ActionList, Button, Popover } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function App() {
  return (
    <div>
      <PopoverWithActionListExample />
      <PopoverWithActionListExample />
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
