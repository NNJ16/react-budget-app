import { Card, Text, Badge, Group } from "@mantine/core";

type DisplayCardProps = {
  label: string;
  amount: number;
  color: string;
};

function DasboardCard({ label, amount, color }: DisplayCardProps) {
  return (
    <Card mx={5} shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text size="lg" weight={500}>
          {label}
        </Text>
        <Badge size="xl" color={color} variant="light">
          LKR {amount}
        </Badge>
      </Group>
    </Card>
  );
}

export default DasboardCard;
