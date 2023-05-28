import PageContainer from "../layout/PageContainer";
import DasboardCard from "../components/DasboardCard";
import HistorryCard from "../components/HistoryCard";
import ChartCard from "../components/ChartCard";
import RecordContext from "../contexts/RecordContext";
import { useContext, useState, useEffect } from "react";
import { Alert } from "@mantine/core";
import { MdError } from "react-icons/md";

const HomePage = () => {
  const { records } = useContext(RecordContext);
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expensePerc, setExpensePerc] = useState(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    let budget = 0,
      expense = 0,
      expensePerc = 0;
    records.map((record) => {
      if (record.type === "Income") {
        budget = budget + record.amount;
      } else {
        expense = expense + record.amount;
      }
    });
    setExpense(expense);
    setBudget(budget);
    setRemaining(budget - expense);
    expensePerc = expense/ budget * 100;
    if(expensePerc > 90){
      setExpensePerc(expensePerc);
      setAlert(true);
    }else{
      setAlert(false);
    }
  }, [records.length]);

  return (
    <PageContainer>
      <div className="h-full">
        <div className="p-1.5">
          <Alert
            icon={<MdError size="1rem" />}
            title="Bummer!"
            color="yellow"
            radius="md"
            className={alert? "block":"hidden"}
          >
            You have reached {expensePerc}% of your budget limit
          </Alert>
        </div>
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
