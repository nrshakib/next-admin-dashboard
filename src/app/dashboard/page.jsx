import Chart from "@/components/dashboard/chart/Chart";
import RightBar from "@/components/dashboard/rightbar/RightBar";
import Summary from "@/components/dashboard/summary/Summary";
import Transactions from "@/components/dashboard/transactions/Transactions";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div>
          <Summary />
          <Summary />
          <Summary />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
