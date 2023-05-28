import { Button, Divider, MultiSelect, Text, TextInput } from "@mantine/core";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mantine/dates";
import RecordContext from "../contexts/RecordContext";

const AddToExpenses = () => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState<any>(null);

  const [category, setCategory] = useState<string[]>([""]);
  const navigate = useNavigate();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const { addRecordElement } = useContext(RecordContext);

  const AddToExpenses = () => {
    if (label === "" || value <= 0 || Number.isNaN(value)) {
      alert(
        "Invalid Entries. Make sure the label is not empty and the amount is greater than zero."
      );
    } else {
      navigate("/");
      addRecordElement({
        label: label,
        amount: value,
        id: crypto.randomUUID(),
        type: "Expense",
        dateCreated: date,
        category: category[0],
      });
    }
  };

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
      <DateTimePicker
        label="Pick date and time"
        placeholder="Pick date and time"
        className="w-full md:w-[40%]"
        mt={20}
        size="md"
        defaultValue={new Date()}
        value={date}
        onChange={setDate}
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
        data={options}
        label="Select a Category"
        placeholder="Select a category"
        searchable
        creatable
        value={category}
        onChange={setCategory}
        maxSelectedValues={1}
      />

      <div className="flex flex-row mt-5">
        <Button variant="outline" onClick={AddToExpenses}>
          Add Expense
        </Button>{" "}
      </div>
    </div>
  );
};

export default AddToExpenses;
