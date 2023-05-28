import PageContainer from "../layout/PageContainer";
import DasboardCard from "../components/DasboardCard";
import HistorryCard from "../components/HistoryCard";
import ChartCard from "../components/ChartCard";
import RecordContext from "../contexts/RecordContext";
import { useContext, useState, useEffect } from "react";

const HomePage = () => {
  const { records } = useContext(RecordContext);
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    let budget=0, expense =0, remaining=0;
    records.map((record)=>{
      if(record.type === "Income"){
        budget = budget + record.amount;
      }else{
        expense = expense + record.amount;
      }
    });
    setExpense(expense);
    setBudget(budget);
    setRemaining(budget - expense);
  }, [records.length]);

  return (
    <PageContainer>
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <DasboardCard amount={budget} color="blue" label="Budget" />
          <DasboardCard amount={remaining} color="yellow" label="Remaining" />
          <DasboardCard amount={expense} color="pink" label="Expenses" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ChartCard />
          </div>
          <HistorryCard />
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
