import { Card } from "@mantine/core";

type DisplayCardProps = {
    label: string;
    amount: number;
    color: string;
};

function ChartCard() {
  return (
    <Card className=" h-[calc(100vh-220px)]" mx={5} my={10} shadow="sm" padding="lg" radius="md" withBorder>

    </Card>
  );
}

export default ChartCard;
