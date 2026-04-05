import Sidebar from "./Sidebar";
import Header from "./Header";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f4f6f9]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
