import ResourcesView from "@views/dashboard/resources";
import DashboardLayout from "layout/dashboard";

const Resources = () => {
  return (
    <div>
      <ResourcesView />
    </div>
  );
};

Resources.PageLayout = DashboardLayout;
export default Resources;
