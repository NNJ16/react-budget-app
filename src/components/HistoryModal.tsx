import {
  Button,
  Modal,
  Text,
  TextInput,
  Divider,
  MultiSelect,
} from "@mantine/core";
import { useContext, useState, useEffect } from "react";
import { DateTimePicker } from "@mantine/dates";
import RecordContext from "../contexts/RecordContext";

type HistoryModalProps = {
  opened: boolean;
  setOpened: (state: boolean) => void;
  label: string;
  amount: number;
  dateCreated: Date;
  id: string;
  type: string;
  category: string;
};

const HistoryModal = ({
  opened,
  setOpened,
  label,
  amount,
  dateCreated,
  type,
  id,
  category,
}: HistoryModalProps) => {
  const { deleteRecordElement, editRecordElement } = useContext(RecordContext);
  const [label1, setLabel1] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState<any>(null);
  const [options, setOptions] = useState<any>([]);

  const [category1, setCategory1] = useState<string[]>([""]);

  const options1 = [
    { value: "Wage, invoices", label: "Wage, invoices" },
    { value: "Savings", label: "Savings" },
    { value: "Investments", label: "Investments" },
    { value: "Interests, dividends", label: "Interests, dividends" },
    { value: "Refunds", label: "Refunds" },
    { value: "Other Income", label: "Other Income" },
  ];

  const options2 = [
    { value: "Shopping", label: "Shopping" },
    { value: "Housing", label: "Housing" },
    { value: "Transportation", label: "Transportation" },
    { value: "Vehicle", label: "Vehicle" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Bill Payments", label: "Bill Payments" },
    { value: "Health", label: "Health" },
    { value: "Other Expenses", label: "Other Expenses" },
  ];

  useEffect(() => {
    setLabel1(label);
    setValue(amount);
    setDate(new Date());
    setCategory1([category]);
    if(type === "Income"){
        setOptions(options1);
    }else{
        setOptions(options2);
    }
  }, []);

  const deleteRecord = () => {
    deleteRecordElement(id);
    setOpened(!opened);
  };

  const editRecord = () => {
    editRecordElement({
      label: label1,
      amount: value,
      id: id,
      type: type,
      dateCreated: date,
      category: category1[0],
    });
    setOpened(!opened);
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Transaction Details"
      styles={{
        title: {
          fontSize: 20,
        },
      }}
    >
      <Divider />
      <TextInput
        onChange={(e) => setLabel1(e.currentTarget.value)}
        mt={10}
        value={label1}
        size="xs"
        label="Label"
        withAsterisk
      />
      <TextInput
        onChange={(e) => setValue(Number.parseFloat(e.currentTarget.value))}
        mt={10}
        size="xs"
        value={value}
        label="Amount"
        withAsterisk
      />
      <DateTimePicker
        label="Pick date and time"
        mt={10}
        size="xs"
        value={date}
        onChange={setDate}
      />
      <MultiSelect
        mt={10}
        data={options}
        label="Select a Category"
        searchable
        size="xs"
        value={category1}
        onChange={setCategory1}
        maxSelectedValues={1}
      />
      <Divider mt={30} mb={10} />
      <div className="flex gap-2 mb-2">
        <Button variant="outline" onClick={editRecord}>
          Edit
        </Button>
        <Button variant="outline" color="red" onClick={deleteRecord}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default HistoryModal;
