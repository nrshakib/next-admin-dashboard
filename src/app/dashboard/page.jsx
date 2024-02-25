import Chart from "@/components/dashboard/chart/Chart";
import RightBar from "@/components/dashboard/rightbar/RightBar";
import Summary from "@/components/dashboard/summary/Summary";
import Transactions from "@/components/dashboard/transactions/Transactions";

const Dashboard = () => {
  return (
    <div className="flex gap-2  mt-5">
      <div className="grow">
        <div className="flex gap-4 justify-between">
          <Summary />
          <Summary />
          <Summary />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="">
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
