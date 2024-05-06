import { faker } from "@faker-js/faker";
import { Box, Button, Popover } from "@shopify/polaris";
import { useState } from "react";

const items = Array.from({ length: 20 }, () => {
  return {
    content: faker.lorem.words(2),
    id: faker.string.uuid(),
  };
});

const noop = () => {};

export default function App() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <Popover
      active={active}
      fullHeight
      activator={
        <Button
          onClick={() => {
            setActive(!active);
          }}
        >
          More actions
        </Button>
      }
      onClose={noop}
    >
      <Component value={value} setValue={setValue} items={items} />
    </Popover>
  );
}

// function AnotherComponent() {
//   const [selected, setSelected] = useState("today");

//   const handleSelectChange = useCallback(
//     (value: string) => setSelected(value),
//     []
//   );

//   const options = [
//     { label: "Today", value: "today" },
//     { label: "Yesterday", value: "yesterday" },
//     { label: "Last 7 days", value: "lastWeek" },
//   ];

//   return (
//     <Box padding="150">
//       {Array.from({ length: 20 }, (_, index) => {
//         return (
//           <Select
//             key={index}
//             label="Date range"
//             options={options}
//             onChange={handleSelectChange}
//             value={selected}
//           />
//         );
//       })}
//     </Box>
//   );
// }

const Component = ({ items, setValue, value }: any) => {
  return (
    <>
      <Popover.Pane captureOverscroll>
        <div style={{ maxHeight: 500 }}>
          {items?.map((item: any) => {
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
      </Popover.Pane>

      <Box position="sticky" insetBlockEnd="0">
        <Button
          onClick={() => {
            setValue((value: any) => value + 1);
          }}
        >
          Click: {value.toString()} times
        </Button>
      </Box>
    </>
  );
};
