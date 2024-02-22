import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="grid-cols-1 bg-gray-800 p-5">
        <Sidebar />
      </div>
      <div className="grid-cols-3 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
