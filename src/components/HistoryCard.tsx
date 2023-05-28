import {
  Divider,
  ScrollArea,
  Stack,
  Text,
  Card,
  Pagination,
} from "@mantine/core";
import HistoryItem from "./HistoryItem";
import RecordContext from "../contexts/RecordContext";
import { useContext } from "react";

function HistorryCard() {
  const { records } = useContext(RecordContext);

  return (
    <Card
      className=" h-[calc(100vh-220px)] flex flex-col justify-between"
      mx={5}
      my={10}
      shadow="sm"
      withBorder
    >
      <div>
        <Text size="lg" weight={500}>
          Transaction History
        </Text>
        <Divider my="sm" />
        {/* <HistoryItem
          amount={1000}
          category="Entertaintment"
          dateCreated="22/10/2023"
          id="1"
          label="Movie tickets"
          type="Expense"
          key={1}
        />
        <HistoryItem
          amount={2000}
          category="Salary"
          dateCreated="22/10/2023"
          id="1"
          label="Salary"
          type="Income"
          key={1}
        /> */}
        <ScrollArea
          type="always"
          className="h-full"
        >
          {records.map((item) => {
            console.log(item);
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
          })}
        </ScrollArea>
      </div>
      <Pagination size="sm" total={10} className="mt-5" />
    </Card>
  );
}

export default HistorryCard;
