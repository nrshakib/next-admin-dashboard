import { FaUsers } from "react-icons/fa";
const Summary = () => {
  return (
    <div className=" bg-slate-800 p-4 rounded-lg flex gap-4 cursor-pointer w-full justify-center hover:bg-gray-700">
      <FaUsers size={24} />
      <div className="flex flex-col gap-2">
        <p>Total Users:</p>
        <p className="text-2xl font-bold text-yellow-500">1025</p>
        <span className="text-sm font-light">
          <span className="text-lime-400">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Summary;
