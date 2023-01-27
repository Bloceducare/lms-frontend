import { useState } from "react";
import Plus from "@components/icons/Plus";
import AddRecordings from "./AddRecordingsModal";
import { useGetRecordingsQuery } from "@services/api";
import Loader from "@components/Loader";
import Trash from "@components/icons/Trash";
import Edit from "@components/icons/Edit";
import View from "@components/icons/View";
import NoSSR from "react-no-ssr";

const TableHeader = [];

const MentorRecordings = () => {
  const [show, setShow] = useState(false);
  const { data, isLoading, isError, refetch } = useGetRecordingsQuery(90);
  return (
    <>
      <NoSSR>
        <AddRecordings show={show} setShow={setShow} />
      </NoSSR>
      <div className="flex justify-between items-center my-6">
        <div>Recordings</div>
        <div>
          <button
            onClick={() => setShow((state) => !state)}
            className="flex items-center"
          >
            <Plus className="mr-1" />
            Upload
          </button>
        </div>
      </div>

      <div>
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
                {data.map((record) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {record.title}
                    </th>
                    <td className="px-6 py-4">{record.description}</td>
                    <td className="px-6 py-4">{record.link}</td>
                    <td className="px-6 py-4">
                      {new Date(record.created_at).toUTCString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex">
                        <Trash className="mr-2" />
                        <Edit className="mr-2" />
                        <View />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default MentorRecordings;
