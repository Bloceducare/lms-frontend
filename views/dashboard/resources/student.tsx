import { useState } from "react";
import Image from "next/image";
import { useGetResourcesQuery } from "@services/api";
import Loader from "@components/Loader";
import Back from "@components/icons/Back";
import Glass from "@components/icons/Glass";
import Button from "@components/commons/button";
import Plus from "@components/icons/Plus";

const StudentResources = () => {
  const [currentFilter, setCurrentFilter] = useState(0);

  const [showFilter, setShowFilter] = useState(false);

  const filterItem = (item) => {
    setCurrentFilter(item);
    setShowFilter((state) => !state);
  };

  const {
    data: ResData = {},
    isError,
    isLoading,
    isFetching,
  } = useGetResourcesQuery(90);

  const mockData = Array(8)
    .fill(0)
    .map((i, index) => ({
      id: index,
      created_at: "2023-01-05T15:10:32.000000Z",
      file_path: null,
      imgCover:
        "https://m.media-amazon.com/images/I/51InjRPaF7L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      link: "https://eloquentjavascript.net/",
      reference: "01GP17QNJKAE5B978ETJR5Z6G6",
      title: "Eloquent JavaScript",
      updated_at: "2023-01-05T15:10:32.000000Z",
    }));

  const _data = ResData.data ? (
    <div>
      <div className="flex justify-between items-center my-6 ">
        <div>
          <button>
            <Back />
          </button>
        </div>
        <div>
          <div className="relative">
            <input
              placeholder="Search"
              className="bg-transparent border rounded-md p-1 px-3 "
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Glass className="scale-110" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-12 my-1">
          <div className="bg-brand-red-one text-white px-10 text-center col-span-3 py-1">
            Filter
          </div>
          <div className="col-end-13 ">{ResData.data.length} Results</div>
        </div>
        <div className="lg:grid lg:grid-cols-12 ">
          <div className="col-span-3 px-3 ">
            <div>
              <div className="flex justify-between my-4 py-4">
                <div className="font-bold">Type</div>
                <div onClick={() => filterItem(1)}>
                  <Plus
                    className={`${
                      currentFilter == 1 && showFilter ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </div>
              {currentFilter == 1 && showFilter ? (
                <div>
                  <div className="mb-1">
                    <input type="checkbox" className="scale-125 mr-2" />
                    <span>PDF</span>
                  </div>
                  <div className="">
                    <input type="checkbox" className="scale-125 mr-2" />
                    <span>External Link</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-span-9">
            <div className="lg:grid lg:grid-cols-12">
              {ResData.data.map((info) => (
                <div className="col-span-3 mx-auto mb-6" key={info.id}>
                  <span className="font-bold">{info.title}</span>
                  <Image
                    src={
                      info?.imgCover ??
                      "https://img.freepik.com/premium-photo/red-diary-isolated-white-background_151013-3848.jpg"
                    }
                    width="150"
                    height="150"
                    alt="resource img"
                  />
                  <Button className="w-full mt-2 bg-red-500 text-red-50">
                    View{" "}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    []
  );

  return <>{isLoading ? <Loader /> : _data}</>;
};

export default StudentResources;
