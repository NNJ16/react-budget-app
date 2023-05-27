import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";

const SetBudget = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <TextInput
        onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        mt={20}
        size="md"
        className="w-full md:w-[40%]"
        placeholder="Ex: 5000"
        label="Enter your budget"
        withAsterisk
      />
      <Button
        mt={20}
        variant="outline"
        onClick={() => {
        
        }}
      >
        Set Budget
      </Button>
    </div>
  );
};

export default SetBudget;