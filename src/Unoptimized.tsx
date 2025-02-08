import {
  IndexTable,
  useIndexResourceState,
  Text,
  Card,
} from "@shopify/polaris";

import { orders } from "./data";
import { ExpensiveComponent } from "./ExpensiveComponent";

const resourceName = {
  singular: "order",
  plural: "orders",
};

export default function Unoptimized() {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(orders);

  const rowMarkup = orders.map(
    ({ id, order, date, customer, total }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {order}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {date}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {customer}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <ExpensiveComponent />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {total}
          </Text>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <Card padding="0">
      <IndexTable
        resourceName={resourceName}
        itemCount={orders.length}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          { title: "Order" },
          { title: "Date" },
          { title: "Customer" },
          { title: "Expensive" },
          { title: "Total", alignment: "end" },
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
}
