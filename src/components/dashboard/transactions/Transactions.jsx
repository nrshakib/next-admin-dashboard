import { FaUserShield } from "react-icons/fa";

const Transactions = async () => {
  const res = await fetch("http://localhost:4000/transactions");
  const transactions = await res.json();
  // console.log(transatcions);
  return (
    <div className="my-5 bg-slate-800 rounded-lg">
      <h1 className="text-center text-3xl py-3">Latest Transactions</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-700 h-10 text-gray-300 font-bold text-lg">
            <td className="pl-8">Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        {transactions.map((each, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td className="flex gap-2 items-center p-2 pl-6">
                  <FaUserShield size={24} />
                  <p>{each.name}</p>
                </td>
                <td
                  className={` capitalize ${
                    each.status === "completed"
                      ? "text-green-500"
                      : each.status === "pending"
                      ? "text-yellow-400"
                      : each.status === "failed"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                >
                  {each.status}
                </td>
                <td>{each.date}</td>
                <td>{each.amount}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Transactions;
