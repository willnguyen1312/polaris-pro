import { PolarisTestProvider } from "@shopify/polaris";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { vi } from "vitest";

import Playground from "./Playground";

describe("Playground", () => {
  it.fails("should pass", async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

    const user = userEvent.setup();

    render(
      <PolarisTestProvider>
        <Playground />
      </PolarisTestProvider>,
    );

    const button1 = screen.getByText("Button 1");
    const button2 = screen.getByText("Button 2");

    const windowDispatchEventSpy = vi.spyOn(window, "dispatchEvent");

    await user.click(button1);

    const popContent1 = screen.getByText("Pop 1");

    await user.click(popContent1);

    expect(windowDispatchEventSpy).toHaveBeenCalledTimes(1);

    await user.click(button2);

    expect(screen.getByText("Pop 2")).toBeInTheDocument();

    expect(windowDispatchEventSpy).toHaveBeenCalledTimes(2);
  });
});
