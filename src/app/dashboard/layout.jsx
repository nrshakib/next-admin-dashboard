import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-5">
      <div className="flex-1 bg-gray-800 p-5">
        <Sidebar />
      </div>
      <div className="flex-auto p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
