import { useState } from "react";
import Plus from "@components/icons/Plus";
import DashboardLayout from "@layout/dashboard";
import AddModulesModal from "@views/dashboard/curriculum/AddModulesModal";
import NoSSR from "react-no-ssr";

const Module = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <NoSSR>
        <AddModulesModal setShow={setShow} show={show} />
      </NoSSR>

      <div className="flex justify-between">
        <div>Modules</div>
        <div>
          <button onClick={() => setShow((state) => !state)}>
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
};

Module.PageLayout = DashboardLayout;

export default Module;
