import {
  IndexTable,
  Card,
  Text,
  IndexTableSelectionType,
  IndexTableProps,
} from "@shopify/polaris";
import { Signal, useSignal } from "@preact/signals-react";
import React from "react";

import { Order, orders } from "./data";
import { ExpensiveComponent } from "./ExpensiveComponent";

const resourceName = {
  singular: "order",
  plural: "orders",
};

const TableRowContent = React.memo(
  ({ order: { order, date, customer, total } }: { order: Order }) => {
    // use context here 💩
    return (
      <>
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
      </>
    );
  }
);

const Table = ({
  onSelectionChangeHandler,
  selectedResources,
}: {
  onSelectionChangeHandler: IndexTableProps["onSelectionChange"];
  selectedResources: Signal<string[]>;
}) => {
  return (
    <IndexTable
      resourceName={resourceName}
      itemCount={orders.length}
      onSelectionChange={onSelectionChangeHandler}
      selectedItemsCount={selectedResources.value.length}
      headings={[
        { title: "Order" },
        { title: "Date" },
        { title: "Customer" },
        { title: "Expensive" },
        { title: "Total", alignment: "end" },
      ]}
    >
      {orders.map((order, index) => (
        <IndexTable.Row
          id={order.id}
          key={order.id}
          selected={selectedResources.value.includes(order.id)}
          position={index}
        >
          <TableRowContent order={order} />
        </IndexTable.Row>
      ))}
    </IndexTable>
  );
};

export default function Optmized() {
  const selectedResources = useSignal<string[]>([]);

  const onSelectionChangeHandler: IndexTableProps["onSelectionChange"] = (
    selectionType,
    isSelecting,
    selection
  ) => {
    if (selectionType === IndexTableSelectionType.Page) {
      console.log("selectionType", selectionType);
      selectedResources.value = isSelecting ? orders.map(({ id }) => id) : [];
      return;
    }

    if (selectionType === IndexTableSelectionType.Single) {
      if (isSelecting) {
        selectedResources.value = [
          ...selectedResources.value,
          selection as string,
        ];
      } else {
        selectedResources.value = selectedResources.value.filter(
          (id) => id !== selection
        );
      }
      return;
    }
  };

  return (
    <Card padding="0">
      <Table
        onSelectionChangeHandler={onSelectionChangeHandler}
        selectedResources={selectedResources}
      />
    </Card>
  );
}
