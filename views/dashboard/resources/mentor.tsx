import { useState } from "react";
import AddResourcesModal from "@views/dashboard/resources/addResourcesModal";
import { useGetResourcesQuery } from "@services/api";
import Button from "@components/commons/button";
import Plus from "@components/icons/Plus";
import Loader from "@components/Loader";
import TrashIcon from "@components/icons/Trash";
import View from "@components/icons/View";
import Edit from "@components/icons/Edit";
import NoSSR from "@components/NoSSR";

const MentorResources = () => {
  const [show, setShow] = useState(false);
  const {
    data: resourceData = {},
    isError,
    isLoading,
    isFetching,
  } = useGetResourcesQuery(90);

  const TableHeader = ["TItle", "Created Data", "Actions"];

  return (
    <>
      <NoSSR>
        <AddResourcesModal setShow={setShow} show={show} />
      </NoSSR>
      <div className="flex justify-between my-6">
        <div>Resources</div>
        <div>
          <button
            className="flex  items-center"
            onClick={() => setShow((state) => !state)}
          >
            <Plus />
            <span className="ml-1">Upload</span>
          </button>
        </div>
      </div>

      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!!resourceData?.data?.length && (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
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
                  {resourceData?.data.map((item) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.title}
                        </th>

                        <td className="px-6 py-4">
                          {/* {item.created_at} */}
                          {new Date(item.created_at).toUTCString()}
                        </td>

                        <td className="px-6 py-4">
                          <button className="p-1  mr-2">
                            <TrashIcon />
                          </button>
                          <button className="p-1  mr-2">
                            <Edit />
                          </button>
                          <button className="p-1 mr-2">
                            <View />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MentorResources;
