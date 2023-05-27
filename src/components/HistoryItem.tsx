import { useState } from "react";
import { Card, Text, ThemeIcon } from "@mantine/core";
import { MdEditDocument} from "react-icons/md";

type HistoryItemProps = {
  label: string;
  amount: number;
  type: string;
  id: string;
  dateCreated: string;
  category: string;
};

const HistoryItem = ({
  label,
  amount,
  type,
  id,
  dateCreated,
  category,
}: HistoryItemProps) => {
  const [opened, setOpened] = useState(false);
  // #69DB7C is green.4 and #FF8787 is red.4.
  const color = type === "Budget" || type === "Income" ? "#69DB7C" : "#FF8787";

  return (
    <>
      <Card
        className="flex flex-row justify-between"
        my={5}
        withBorder
        onClick={() => {
          setOpened(true);
        }}
      >
        <Text weight={500} size={15}>
          {/* Truncate the label if its length exceeds 44 characters */}
          {label.length > 44 ? label.slice(0, 44) + "..." : label}
        </Text>
        <div className="flex items-center">
          <Text size={15} color={color} weight={500}>
            {/* Display the correct sign based on the type of transaction */}
            {type === "Income" ? "+" : "-"}
            LKR {amount}
          </Text>
          <ThemeIcon className="cursor-pointer" variant="light" style={{ backgroundColor: "transparent" }}>
            <MdEditDocument />
          </ThemeIcon>
        </div>
      </Card>
    </>
  );
};

export default HistoryItem;
