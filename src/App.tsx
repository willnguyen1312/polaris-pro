import {
  Badge,
  IndexTable,
  IndexTableProps,
  LegacyCard,
  Modal,
  Text,
  useIndexResourceState,
} from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import { useState } from "react";

function IndexTableWithMultiplePromotedBulkActionsExample() {
  const [orders, setOrders] = useState(() => {
    const orders = [
      {
        id: "1020",
        order: "#1020",
        date: "Jul 20 at 4:34pm",
        customer: "Jaydon Stanton",
        total: "$969.44",
        paymentStatus: <Badge progress="complete">Paid</Badge>,
        fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
      },
      {
        id: "1019",
        order: "#1019",
        date: "Jul 20 at 3:46pm",
        customer: "Ruben Westerfelt",
        total: "$701.19",
        paymentStatus: (
          <Badge progress="partiallyComplete">Partially paid</Badge>
        ),
        fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
      },
      {
        id: "1018",
        order: "#1018",
        date: "Jul 20 at 3.44pm",
        customer: "Leo Carder",
        total: "$798.24",
        paymentStatus: <Badge progress="complete">Paid</Badge>,
        fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
      },
    ];

    return orders;
  });
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
    removeSelectedResources,
    clearSelection,
  } = useIndexResourceState(orders);

  const rowMarkup = orders.map(
    (
      { id, order, date, customer, total, paymentStatus, fulfillmentStatus },
      index
    ) => (
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
        <IndexTable.Cell>{date}</IndexTable.Cell>
        <IndexTable.Cell>{customer}</IndexTable.Cell>
        <IndexTable.Cell>
          <Text as="span" alignment="end" numeric>
            {total}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{paymentStatus}</IndexTable.Cell>
        <IndexTable.Cell>{fulfillmentStatus}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const promotedBulkActions: IndexTableProps["promotedBulkActions"] = [
    {
      content: "Create shipping labels",
      details: "Print shipping labels for 3 orders",
    },
    {
      content: "Mark as fulfilled",
      onAction: () => console.log("Todo: implement mark as fulfilled"),
    },
    {
      content: "Capture payment",
      onAction: () => console.log("Todo: implement capture payment"),
    },
  ];
  const bulkActions = [
    {
      content: "Add tags",
      onAction: () => console.log("Todo: implement bulk add tags"),
    },
    {
      content: "Remove tags",
      onAction: () => console.log("Todo: implement bulk remove tags"),
    },
    {
      title: "Import",
      items: [
        {
          content: "Import from PDF",
          onAction: () => console.log("Todo: implement PDF importing"),
        },
        {
          content: "Import from CSV",
          onAction: () => console.log("Todo: implement CSV importing"),
        },
      ],
    },
    {
      icon: DeleteIcon,
      destructive: true,
      content: "Delete customers",
      onAction: () => console.log("Todo: implement bulk delete"),
    },
  ];

  // return (
  //   <TextField
  //     label="Voila"
  //     name="asd"
  //     value="Ahehe"
  //     autoComplete="off"
  //     spellCheck
  //     tone="magic"
  //   />
  // );

  return (
    <LegacyCard>
      <button
        disabled
        onClick={() => {
          alert("Buy items");
          //   const newOrders = orders.filter(
          //     (item) => !selectedResources.includes(item.id)
          //   );
          //   setOrders(newOrders);
          //   removeSelectedResources(selectedResources);
          //   clearSelection();
        }}
      >
        Buy items
      </button>

      <Modal
        open
        title="Voila"
        onClose={() => {}}
        primaryAction={{
          content: "CLick me",
          onAction: () => {
            alert("Clicked");
          },
          disabled: true,
        }}
      >
        <h1>Voila</h1>
      </Modal>
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
          { title: "Total", alignment: "end" },
          { title: "Payment status" },
          { title: "Fulfillment status" },
        ]}
        bulkActions={bulkActions}
        promotedBulkActions={promotedBulkActions}
      >
        {rowMarkup}
      </IndexTable>
    </LegacyCard>
  );
}

export default IndexTableWithMultiplePromotedBulkActionsExample;
