import PageContainer from "../layout/PageContainer";
import DasboardCard from "../components/DasboardCard";
import HistorryCard from "../components/HistoryCard";
import ChartCard from "../components/ChartCard";
const HomePage = () => {
  return (
    <PageContainer>
      <div className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <DasboardCard amount={1000} color="blue" label="Budget" />
          <DasboardCard amount={1000} color="yellow" label="Remaining" />
          <DasboardCard amount={1000} color="pink" label="Expenses" />
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
