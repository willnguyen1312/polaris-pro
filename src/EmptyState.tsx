import { Card, EmptyState } from "@shopify/polaris";

function EmptyStateExample() {
  return (
    <Card>
      <EmptyState
        heading="Manage your inventory transfers"
        action={{ content: "Add transfer" }}
        secondaryAction={{
          content: "Learn more",
          // url: window.location.href,
          onAction: window.location.reload.bind(window.location),
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Track and receive your incoming inventory from suppliers.</p>
      </EmptyState>
    </Card>
  );
}

export default EmptyStateExample;
