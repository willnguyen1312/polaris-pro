import { Popover } from "@shopify/polaris";
import React from "react";

export const Playground = () => {
  return (
    <>
      <ButtonCell buttonText="Button 1">Pop 1</ButtonCell>

      <ButtonCell buttonText="Button 2">Pop 2</ButtonCell>

      <button
        onClick={() => {
          window.dispatchEvent(new MouseEvent("click"));
        }}
      >
        Close all
      </button>
    </>
  );
};

const ButtonCell = (props: {
  children: React.ReactNode;
  buttonText: string;
}) => {
  const [active, setActive] = React.useState(false);
  return (
    <div
      onClick={(event) => {
        // Due to how Portal API and event system work in React
        // The event can come from the activator or the popover content even though popover is not a direct child in the DOM
        // We stop propagation to prevent the table row from being (de)selected
        event.stopPropagation();

        // The condition below will return false if event comes from the popover content
        // and true if it comes from the activator because it is a direct child of the current div element
        const isTriggeredByActivator = event.currentTarget.contains(
          event.target as Node
        );

        // If event comes from the activator, we dispatch a mouse click event on the window object
        // to inform other Popover components that users already clicked outside
        if (isTriggeredByActivator) {
          window.dispatchEvent(new MouseEvent("click"));
        }
      }}
    >
      <Popover
        onClose={() => {
          setActive(false);
        }}
        active={active}
        activator={
          <button
            onClick={() => {
              setActive(!active);
            }}
          >
            {props.buttonText}
          </button>
        }
      >
        {props.children}
      </Popover>
    </div>
  );
};
