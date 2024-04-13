import { faker } from "@faker-js/faker";
import {
  ActionListProps,
  Box,
  Button,
  Checkbox,
  Popover,
} from "@shopify/polaris";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

const initialItems: ActionListProps["items"] = Array.from(
  { length: 20 },
  () => {
    return {
      content: faker.lorem.words(2),
      id: faker.string.uuid(),
    };
  }
);

// Create a context with a true/false value
const context = createContext({
  checked: false,
  items: [] as ActionListProps["items"],
  onCheckboxChange: () => {},
});

export default function App() {
  const boxRef = useRef<HTMLElement>(null);
  const [value, setValue] = useState(true);
  const [items, setItems] = useState<ActionListProps["items"]>(initialItems);

  return (
    <context.Provider
      value={{
        checked: value,
        items,
        onCheckboxChange: () => {
          setValue((value) => !value);
          setItems((items: ActionListProps["items"] = []) => {
            return items.map((item) => {
              return {
                id: item.id,
                content: `${item.content?.split("").reverse().join("")}`,
              };
            });
          });
        },
      }}
    >
      <Box ref={boxRef}>
        <PopoverWithActionListExample />
      </Box>
    </context.Provider>
  );
}

function PopoverWithActionListExample() {
  const { items, checked, onCheckboxChange } = useContext(context);
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator = (
    <Button
      onClick={() => {
        togglePopoverActive();
      }}
      disclosure
    >
      More actions
    </Button>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      autofocusTarget="first-node"
      onClose={togglePopoverActive}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: 350,
        }}
      >
        <div
          style={{
            overflowY: "auto",
            overscrollBehavior: "contain",
          }}
        >
          {items?.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                {item.content}
              </div>
            );
          })}
        </div>
        <Checkbox
          label="Checkbox"
          checked={checked}
          onChange={onCheckboxChange}
        />
      </div>
    </Popover>
  );
}
