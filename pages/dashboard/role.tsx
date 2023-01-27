import { useState } from "react";
import Plus from "@components/icons/Plus";
import AddRoleModal from "@views/dashboard/AddRoleModal";
import DashboardLayout from "layout/dashboard";
import { useGetUsersQuery } from "@services/api";

const TableHeader = ["User", "Role", "Track", "Cohort"];

const Role = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((state) => !state);
  };

  const { data = [], isLoading } = useGetUsersQuery(90);

  return (
    <>
      <AddRoleModal setShow={setShow} show={show} />
      <div className="flex justify-between mb-6">
        <div>Available Roles</div>
        <div>
          <button onClick={onClick}>
            <Plus />
          </button>
        </div>
      </div>
      <div>
        {isLoading ? (
          "Loading"
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {TableHeader.map((i, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {i}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.firstname} {user.lastname}
                  </th>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">{user.track_id}</td>
                  <td className="px-6 py-4">{user.cohort_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

Role.PageLayout = DashboardLayout;
export default Role;
