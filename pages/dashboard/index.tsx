import DashboardView from "@views/dashboard";
import DashboardLayout from "layout/dashboard";

const Dashboard = () => {
  return (
    <>
      <DashboardView />
    </>
  );
};

Dashboard.PageLayout = DashboardLayout;
export default Dashboard;
