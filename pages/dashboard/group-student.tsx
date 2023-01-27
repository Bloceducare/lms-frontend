import Button from "@components/commons/button";
import Plus from "@components/icons/Plus";
import { useGetGroupsQuery } from "@services/api";
import AddGroupModal from "@views/dashboard/AddGroupModal";
import DashboardLayout from "@layout/dashboard";
import { useState } from "react";
import NoSSR from "@components/NoSSR";

const GroupStudent = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((state) => !state);
  };

  const { isLoading, data = [] } = useGetGroupsQuery(90);

  return (
    <>
      <NoSSR>
        <AddGroupModal setShow={setShow} show={show} />
      </NoSSR>
      <div className="flex justify-between mb-6">
        <div>Groups</div>
        <div>
          <Button onClick={onClick}>
            <Plus />
          </Button>
        </div>
      </div>
      <div>
        {isLoading ? (
          "Loading"
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Reference
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

GroupStudent.PageLayout = DashboardLayout;
export default GroupStudent;
