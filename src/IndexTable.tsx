import { ActionList, Button, Popover } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function PopoverContentExample() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Sales channels
    </Button>
  );

  return (
    <div style={{ height: "250px", marginTop: 200, marginLeft: 200 }}>
      <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <Popover.Pane fixed>
          <Popover.Section>
            <p>Available sales channels</p>
          </Popover.Section>
        </Popover.Pane>
        <Popover.Pane>
          <ActionList
            actionRole="menuitem"
            items={[
              { content: "Online store" },
              { content: "Facebook" },
              { content: "Shopify POS" },
            ]}
          />
        </Popover.Pane>
      </Popover>
    </div>
  );
}
