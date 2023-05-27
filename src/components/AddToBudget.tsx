import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";

const AddToBudget = () => {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
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
      <Button
        variant="outline"
        mt={20}
        onClick={() => {
       
        }}
      >
        Add To Budget
      </Button>
    </div>
  );
};

export default AddToBudget;