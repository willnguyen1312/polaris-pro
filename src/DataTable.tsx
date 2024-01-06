import { DataTable, Page } from "@shopify/polaris";

export function DataTableExample() {
  const rows = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
  ];

  return (
    <Page title="Sales by product">
      <DataTable
        columnContentTypes={[
          "text",
          "numeric",
          "numeric",
          "numeric",
          "numeric",
        ]}
        headings={[
          "Product",
          "Price",
          "SKU Number",
          "Net quantity",
          "Net sales",
        ]}
        rows={rows}
        totals={["", "", "", 255, "$155,830.00"]}
      />
    </Page>
  );
}
