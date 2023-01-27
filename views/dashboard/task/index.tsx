import { useState } from "react";
import Plus from "@components/icons/Plus";
import Loader from "@components/Loader";
import { useGetTasksQuery } from "@services/api";
import NoSSR from "@components/NoSSR";

import AddTaskViewsModal from "./AddTasksModal";

const TableHeader = [
  "Title",
  "Description",
  "Created At",
  "Deadline",
  "Status",
];

const itemStatusBg = {
  active: "green-700 ",
  ended: "red-400",
  upcoming: "yellow-400",
};

const TaskView = () => {
  const {
    data: taskData = {},
    isLoading,
    isFetching,
    isError,
  } = useGetTasksQuery(90);
  const [show, setShow] = useState(false);
  return (
    <>
      <NoSSR>
        <AddTaskViewsModal show={show} setShow={setShow} />
      </NoSSR>
      <div className="flex justify-between my-6">
        <div>Tasks </div>
        <div>
          <button onClick={() => setShow((state) => !state)}>
            <Plus />
          </button>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
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
              {taskData?.data.map((item) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">
                      {new Date(item.created_at).toUTCString()}
                    </td>
                    <td className="px-6 py-4">
                      {item.deadline ? item.deadline : "--"}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        className={`text-white 
                        bg-${itemStatusBg[item.status]} p-1 px-3 rounded-md`}
                      >
                        {item.status}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default TaskView;
