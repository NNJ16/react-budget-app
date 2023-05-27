import { Divider, Text } from "@mantine/core";
import AddToBudget from "../components/AddToBudget";
import SetBudget from "../components/SetBudget";
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
        Set Your Income / Budget
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
        Sets your income / budget to the entered value.
      </Text>
      <SetBudget />
      <Divider mt={30} mb={20} />
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
      <Divider mt={30} mb={20} />
    </PageContainer>
  );
};

export default AddBudgetPage;
