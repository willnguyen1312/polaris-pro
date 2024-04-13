import { faker } from "@faker-js/faker";
import { ActionListProps, Button, Popover, Text } from "@shopify/polaris";
import { useState } from "react";

const items: ActionListProps["items"] = Array.from({ length: 20 }, () => {
  return {
    content: faker.lorem.words(2),
    id: faker.string.uuid(),
  };
});

const noop = () => {};

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <Popover
      active
      activator={<Button>More actions</Button>}
      autofocusTarget="first-node"
      onClose={noop}
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

        <Text as="p">Value: {value}</Text>
        <Button
          onClick={() => {
            setValue((value) => value + 1);
          }}
        >
          Click
        </Button>
      </div>
    </Popover>
  );
}
