import {
  Divider,
  ScrollArea,
  Stack,
  Text,
  Card,
  Pagination,
} from "@mantine/core";
import HistoryItem from "../components/HistoryItem";
import RecordContext from "../contexts/RecordContext";
import { useContext, useState } from "react";
import { NativeSelect } from "@mantine/core";

const ViewSpendingPage = () => {
  const { records } = useContext(RecordContext);
  const [value, setValue] = useState<string>("all");

  const options = [
    { value: "all", label: "All Categories" },
    { value: "Shopping", label: "Shopping" },
    { value: "Housing", label: "Housing" },
    { value: "Transportation", label: "Transportation" },
    { value: "Vehicle", label: "Vehicle" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Bill Payments", label: "Bill Payments" },
    { value: "Health", label: "Health" },
    { value: "Other Expenses", label: "Other Expenses" },
  ];

  return (
    <Card
      className=" h-[calc(100vh-120px)] flex flex-col justify-between"
      mx={5}
      my={10}
      shadow="sm"
      withBorder
    >
      <div>
        <div className="flex justify-between">
          <Text size="lg" weight={500}>
            Transaction History
          </Text>

          <NativeSelect
            data={options}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
        <Divider my="sm" />
        <ScrollArea type="always" className="h-full">
          {records.map((item) => {
            if (value === "all" && item.type === "Expense") {
              return (
                <HistoryItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  amount={item.amount}
                  type={item.type}
                  dateCreated={item.dateCreated}
                  category={item.category}
                />
              );
            } else if (item.category === value && item.type === "Expense") {
              return (
                <HistoryItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  amount={item.amount}
                  type={item.type}
                  dateCreated={item.dateCreated}
                  category={item.category}
                />
              );
            }
          })}
        </ScrollArea>
      </div>
      <Pagination size="sm" total={10} className="mt-5" />
    </Card>
  );
};

export default ViewSpendingPage;
