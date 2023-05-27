import {
  Divider,
  ScrollArea,
  Stack,
  Text,
  Card,
  Pagination,
} from "@mantine/core";
import HistoryItem from "./HistoryItem";

function HistorryCard() {
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
        <HistoryItem
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
        />
        
      </div>
      <Pagination size="sm" total={10} className="mt-5" />
    </Card>
  );
}

export default HistorryCard;
