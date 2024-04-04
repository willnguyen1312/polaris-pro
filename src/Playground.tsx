import { useCallback, useState } from "react";
import { Button, Frame, Link, Modal, TextContainer } from "./polaris";

export default function ModalExample() {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button onClick={handleChange}>Open</Button>;

  return (
    <div style={{ height: "500px" }}>
      <Frame>
        <Modal
          size="large"
          activator={activator}
          open={active}
          onClose={handleChange}
          title="Reach more shoppers with Instagram product tags"
          primaryAction={{
            content: "Add Instagram",
            onAction: handleChange,
          }}
          secondaryActions={[
            {
              content: "Learn more",
              onAction: handleChange,
            },
          ]}
        >
          <Modal.Section>
            <TextContainer>
              <p>
                Use Instagram posts to share your products with millions of
                people. Let shoppers buy from your store without leaving
                Instagram.
              </p>
              <Link
                url="https://namnguyen.design"
                target="_blank"
                onClick={() => {
                  console.log("Voila");
                }}
              >
                Voila
              </Link>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </Frame>
    </div>
  );
}
