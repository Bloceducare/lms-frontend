import { useGetCurriculumQuery } from "@services/api";
import DashboardLayout from "layout/dashboard";
import { useState } from "react";

const Curriculum = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((state) => !state);
  };

  const { isLoading, data = [] } = useGetCurriculumQuery(90);

  return (
    <>
      <div>
        {isLoading ? (
          "Loading"
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Reference
                </th>
                <th scope="col" className="px-6 py-3">
                  Track{" "}
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
                    {user.title}
                  </th>
                  <td className="px-6 py-4">{user.reference}</td>
                  <td className="px-6 py-4">{user.track_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

Curriculum.PageLayout = DashboardLayout;
export default Curriculum;
