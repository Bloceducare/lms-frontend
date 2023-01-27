import useUser from "@views/auth/state/hooks/useUser";
import { percentValue } from "utils";
import CircularProgressBar from "./circularProgress";
import ProgressBar from "./progressBar";

interface IModules {
  name: string;
  totalStep: number;
  currentStep: number;
  id: number;
}
const dashData = {
  resourcesBox: [
    { name: "solidity", id: 0 },
    { name: "Blockchain", id: 1 },
    { name: "Foundry", id: 2 },
  ],
  modules: [
    {
      name: "Introduction to Html",
      totalStep: 1,
      currentStep: 1,
      id: 0,
    },
    {
      name: "Div in Html",
      totalStep: 1,
      currentStep: 1,
      id: 1,
    },
    {
      name: "Html List",
      totalStep: 6,
      currentStep: 3,
      id: 2,
    },
    {
      name: "Html Form",
      totalStep: 10,
      currentStep: 2,
      id: 3,
    },
    {
      name: "Html Media",
      totalStep: 10,
      currentStep: 1,
      id: 4,
    },
  ],
};

const StudentDash = () => {
  const colorArray = [
    "bg-brand-blue-four",
    "bg-brand-pink-two",
    "bg-brand-red-two",
  ];

  const pickItem = (array: string[]) => {
    let index = 0;
    return function () {
      let item = array[index];
      index++;
      if (index === array.length) {
        index = 0;
      }
      return item;
    };
  };

  const pick = pickItem(colorArray);
  const user = useUser();
  return (
    <>
      <div className="container mx-auto ">
        <div className="grid content-end grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:h-56 ">
          <div className="relative flex items-center p-6 text-xl text-white rounded-xl bg-card-purple h-36">
            Solidity
            <img
              src="/fav.svg"
              alt="fav image"
              className="absolute p-2 rounded-full right-2 top-2 fav-image bg-white/30"
            />
          </div>

          <div className="relative flex items-center p-6 text-xl text-white rounded-xl bg-card-orange h-36">
            Blockchain
            <img
              src="/fav.svg"
              alt="fav image"
              className="absolute p-2 rounded-full right-2 top-2 fav-image bg-white/30"
            />
          </div>
          <div className="relative flex items-center p-6 text-xl text-white bg-card-blue rounded-xl h-36">
            Foundry
            <img
              src="/fav.svg"
              alt="fav image"
              className="absolute p-2 rounded-full right-2 top-2 fav-image bg-white/30"
            />
          </div>
          <div className="relative flex flex-col justify-center p-12 text-xl text-center rounded-xl h-36 bg-card-main">
            <img
              className="absolute w-20 mx-auto text-center im-test"
              src="/avatar.svg"
              alt="avatar"
            />
            <div>
              <p className="mt-3 text-sm">
                {user?.firstname} {user?.lastname}
              </p>
              <small>Cohort 8</small>
            </div>
            <div className="flex justify-between ">
              <div>
                <div className="mb-2 text-sm">Group</div>
                <div className="text-lg font-bold">A</div>
              </div>
              <div>
                <div className="mb-2 text-sm">Track</div>
                <div className="text-lg font-bold">Web 3</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section className="grid-cols-12 gap-6 mt-6 lg:grid">
            <div className="col-span-3 ">
              <div className="pb-12 font-bold ">Overall Performance</div>
              <div className="grid bg-white h-52 place-items-center">
                <div className="w-full max-w-sm text-center max-h-32">
                  <CircularProgressBar progress={70} />
                  <p className="mt-3 font-black text-grey-3">Score</p>
                </div>
              </div>
            </div>
            <div className="col-span-6 pt-2 ">
              <div className="mt-16 ">
                {dashData.modules.map((item, index) => {
                  let length = dashData.modules.length;
                  if (index == length) {
                    length = 0;
                  }
                  return (
                    <div
                      className="flex items-center justify-between p-3 mb-2 bg-white"
                      key={item.id}
                    >
                      <div className="flex">
                        <div
                          className={` p-3 
                            rounded-sm  ${pick()}`}
                        >
                          <img src="/local_library.svg" className="scale-75" />
                        </div>
                        <div className="flex items-center ml-3 text-grey-2">
                          {item.name}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="px-8">
                          {item.currentStep}/{item.totalStep}
                        </div>
                        <div>
                          {percentValue(item)}
                          % Done
                          <ProgressBar value={percentValue(item)} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-span-3 font-bold">
              <p className="mb-2">Quick Start</p>
              <div className="flex items-center p-4 mb-3 bg-white rounded-lg">
                <div className="p-1 mr-2 rounded-md bg-brand-pink-three">
                  <img src="/hat.svg" className="scale-75" alt="curr" />
                </div>
                <div className="text-grey-2">Curriculum</div>
              </div>

              <div className="flex items-center p-4 mb-3 bg-white rounded-lg">
                <div className="p-1 mr-2 rounded-md bg-brand-orange">
                  <img src="/pen.svg" className="scale-75" alt="curr" />
                </div>
                <div className="text-grey-2">Test </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg">
                <div className="p-1 mr-2 rounded-md bg-brand-green">
                  <img src="/headphone.svg" className="scale-75" alt="curr" />
                </div>
                <div className="text-grey-2">Recordin</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default StudentDash;
