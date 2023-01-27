import ProgressBar from "./progressBar";
import DoughNut from "./do";

// 1 -active
// 2 - completed
// 3 - Ended
const data = [
  {
    type: "Individual Task",
    dueData: "December 23, 2022",
    status: 2,
    id: 0,
  },
  {
    type: "Group Task",
    dueData: "December 23, 2022",
    status: 3,
    id: 1,
  },
  {
    type: "Individual Task",
    dueData: "December 23, 2022",
    status: 1,
    id: 2,
  },
];

const statusColor = {
  1: "brand-orange-two",
  2: "brand-blue-six",
  3: "brand-pink-three",
};
const statusText = {
  1: "Active",
  2: "Completed",
  3: "Ended",
};

const MentorDash = () => {
  return (
    <>
      <div className="flex justify-end ">
        <div className="w-64 p-3 bg-white">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-brand-black/80">
              Number of Groups
            </div>
            <div className="text-xs">Cohort 8</div>
          </div>
          <div className="flex items-center justify-center mx-auto text-6xl border-4 rounded-full w-28 h-28 border-brand-orange-two text-brand-green-two">
            7
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className=" col-span-9 p-5 rounded-sm bg-white">
          <div>
            <div className="flex justify-between text-brand-blue-seven">
              <div>8 task completed out of 10</div>
              <div className="text-xs ">
                Show:
                <span>This Week</span>
              </div>
            </div>
            <div className="my-4 mb-8">
              <ProgressBar value={90} className="w-full" />
            </div>
          </div>

          {data.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between box-one bg-white p-4 mb-6">
                <div>
                  <span className="text-base font-medium mt-2">
                    {item.type}
                  </span>
                  <div className="mt-3">
                    <span className="text-grey-4/50 text-sm">Due Date:</span>{" "}
                    <span className="text-grey-4">{item.dueData}</span>
                  </div>
                </div>
                <div className="text-grey-5 text-xs">
                  <div className="text-right">Reminder</div>

                  <div
                    className={`p-2 w-[6rem] rounded-md text-white mt-3 text-center
                    bg-${
                      statusColor?.[item?.status as keyof typeof statusColor]
                    }
                    `}
                  >
                    {statusText?.[item?.status as keyof typeof statusText] ??
                      "bg-red-400"}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <button className="text-brand-blue-eight text-sm font-bold">
              Show more
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full col-span-3  box-s-2">
          <DoughNut />
          {/* <DoughNut data={data} /> */}
        </div>
      </div>
    </>
  );
};

export default MentorDash;
