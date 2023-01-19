import AdminDash from "@components/adminDash";
import StudentDash from "@components/studentDash";
import DashboardLayout from "layout/dashboard";

const Dashboard = () => {
  return (
    <>
      {/* <StudentDash /> */}
      <AdminDash />
    </>
  );
};

Dashboard.PageLayout = DashboardLayout;
export default Dashboard;
