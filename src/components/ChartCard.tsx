import { Card, Text, Divider } from "@mantine/core";
import PieChartCard from "./PieChart";
import RecordContext from "../contexts/RecordContext";
import { useContext, useState, useEffect } from "react";

type DisplayCardProps = {
  label: string;
  amount: number;
  color: string;
};



function ChartCard() {
  const { records } = useContext(RecordContext);
  const [data, setData] = useState([]);

  const options = [
    { value: "Shopping", label: "Shopping" },
    { value: "Housing", label: "Housing" },
    { value: "Transportation", label: "Transportation" },
    { value: "Vehicle", label: "Vehicle" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Bill Payments", label: "Bill Payments" },
    { value: "Health", label: "Health" },
    { value: "Other Expenses", label: "Other Expenses" },
  ];

  useEffect(()=>{
    var arr:any = [];
    options.map((item)=>{
      var categoryValue: any = {};
      categoryValue.id = item.value;
      categoryValue.label = item.value;
      var value = 0;
      records.map((record)=>{
        if(record.type ==="Expense" && record.category === item.value){
          value = value +  record.amount
        }
      });
      categoryValue.value = value;
      arr.push(categoryValue)
    });
    setData(arr);
  },[records.length]);

  return (
    <Card
      className="h-[calc(100vh-220px)]  flex flex-col"
      mx={5}
      my={8}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Text size="lg" weight={500}>
        Expense Details
      </Text>
      <Divider my="sm" />
      <PieChartCard data={data} />
    </Card>
  );
}

export default ChartCard;
