import { Button, Divider, MultiSelect, Text, TextInput } from "@mantine/core";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

type AvailableCategories = {
  label: string;
  value: string;
  isused: string;
};

const AddToExpenses = () => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);

  const [category, setCategory] = useState<string[]>([""]);
  const navigate = useNavigate();

  return (
    <div>
      <TextInput
        onChange={(e) => setLabel(e.currentTarget.value)}
        mt={20}
        size="md"
        className="w-full md:w-[40%]"
        placeholder="Ex: Car payments"
        label="Label"
        withAsterisk
      />
      <TextInput
        onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        mt={20}
        size="md"
        className="w-full md:w-[40%]"
        placeholder="Ex: 3000"
        label="Amount"
        withAsterisk
      />
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
        Add a Category to Your Expense
      </Text>
      <MultiSelect
        className="w-full md:w-[40%]"
        mt={10}
        data={[]}
        label="Select a Category"
        placeholder="Select a category or create a new one"
        searchable
        creatable
        value={category}
        onChange={setCategory}
        maxSelectedValues={1}
        getCreateLabel={(query) =>
          `+ Create ${query[0].toUpperCase() + query.substring(1)}`
        }
        onCreate={(query) => {
          const capQuery = query[0].toUpperCase() + query.substring(1);
          const item = {
            value: capQuery,
            label: capQuery,
            isused: "false",
          };
          return item;
        }}
      />

      <div className="flex flex-row mt-5">
        <Button variant="outline">
          Add Expense
        </Button>
        {" "}
        <Button className="ml-2" variant="outline" color="red" onClick={() => {}}>
          Remove Category
        </Button>
      </div>
    </div>
  );
};

export default AddToExpenses;
