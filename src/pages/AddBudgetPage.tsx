import { Divider, Text } from "@mantine/core";
import AddToBudget from "../components/AddToBudget";
import PageContainer from "../layout/PageContainer";
import { useContext } from "react";

const AddBudgetPage = () => {
  return (
    <PageContainer>
      <Text
        size="xl"
        weight={700}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
        })}
      >
        Add an Income Source
      </Text>
      <Text
        size="xs"
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[1]
              : theme.colors.gray[9],
        })}
      >
        Adds on to your current income / budget amount.
      </Text>
      <AddToBudget />
    </PageContainer>
  );
};

export default AddBudgetPage;
