import { useState } from "react";
import Plus from "@components/icons/Plus";
import AddTopicsModal from "@views/dashboard/curriculum/AddTopicsModal";
import DashboardLayout from "@layout/dashboard";
import NoSSR from "react-no-ssr";

const Topics = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <NoSSR>
        <AddTopicsModal setShow={setShow} show={show} />
      </NoSSR>
      <div className="flex justify-between">
        <div>Topics</div>
        <div>
          <button onClick={() => setShow((state) => !state)}>
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
};

Topics.PageLayout = DashboardLayout;

export default Topics;
