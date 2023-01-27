import { useState } from "react";
import Plus from "@components/icons/Plus";
import AddTopicsModal from "@views/dashboard/curriculum/AddTopicsModal";
import DashboardLayout from "layout/dashboard";

const Topics = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <AddTopicsModal setShow={setShow} show={show} />
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
