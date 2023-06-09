import { Button, Divider, MultiSelect, Text, TextInput } from "@mantine/core";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mantine/dates";
import RecordContext from "../contexts/RecordContext";

const AddToBudget = () => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState<any>(new Date());

  const [category, setCategory] = useState<string[]>([""]);

  const options = [
    { value: "Wage, invoices", label: "Wage, invoices" },
    { value: "Savings", label: "Savings" },
    { value: "Investments", label: "Investments" },
    { value: "Interests, dividends", label: "Interests, dividends" },
    { value: "Refunds", label: "Refunds" },
    { value: "Other Income", label: "Other Income" },
  ];

  const navigate = useNavigate();

  const { addRecordElement } = useContext(RecordContext);

  const AddToBudget = () => {
    if (label === "" || value <= 0 || Number.isNaN(value)) {
      alert(
        "Invalid Entries. Make sure to fill the required fields."
      );
    } else {
      if(!category[0]){
        category[0] = "Other Income"
      }
      navigate("/");
      addRecordElement({
        label: label,
        amount: value,
        id: crypto.randomUUID(),
        type: "Income",
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
        placeholder="Ex: Christmas bonus"
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
        Add a Category to Your Budget
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
      <Button variant="outline" mt={20} onClick={AddToBudget}>
        Add To Budget
      </Button>
    </div>
  );
};

export default AddToBudget;
