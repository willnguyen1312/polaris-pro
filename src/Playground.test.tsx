import { AppProvider } from "@shopify/polaris";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Playground } from "./Playground";

window.matchMedia = window.matchMedia || (() => ({ matches: false }));

describe("Playground", () => {
  it("should pass", async () => {
    const user = userEvent.setup();

    render(
      <AppProvider i18n={{}}>
        <Playground />
      </AppProvider>
    );

    const button1 = screen.getByText("Button 1");
    const button2 = screen.getByText("Button 2");

    await user.click(button1);
    await user.click(button1);
    await user.click(button2);

    const closeAllButton = screen.getByText("Close all");
    await user.click(closeAllButton);

    expect(screen.queryByText("Pop 1")).not.toBeInTheDocument();
  });
});
