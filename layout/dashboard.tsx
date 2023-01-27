import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { dashRoutes } from "config/routes";
import { useRouter } from "next/router";
import { IRouteLink } from "interface";
import AngleUp from "@components/icons/AngleUp";
import { AppState } from "store";
import { useLogoutUserMutation } from "@services/api";
import { logoutUser } from "@views/auth/state";
import Logout from "@components/icons/Logout";

const RouteLink = ({ ...item }: IRouteLink) => {
  const router = useRouter();
  const Icon = item.icon;
  const [isExpanded, toggleExpanded] = useState(false);
  const currentLink = router?.pathname;

  if (typeof item.route == "string") {
    return (
      <>
        <Link
          href={item.route}
          className={`${
            currentLink == item.route ? "bg-white/50" : ""
          } rounded-l-xl hover:bg-white/30 my-2`}
        >
          <div
            className="flex items-center justify-start w-48 p-4 cursor-pointer "
            key={item.id}
          >
            <div className="mr-4">
              <Icon />
            </div>
            <div>{item.title}</div>
          </div>
        </Link>
      </>
    );
  }

  return (
    <>
      {
        <button
          key={item.id}
          onClick={() => toggleExpanded((state) => !state)}
          className={`text-white rounded-l-xl hover:bg-white/30 my-2`}
        >
          <Link href={item.link as string}>
            <div className="flex items-center justify-start w-48 p-4 cursor-pointer ">
              <div className="mr-4">
                <Icon />
              </div>
              <div>{item.title}</div>
              <div>
                <AngleUp className={`ml-6 ${isExpanded ? "" : "rotate-180"}`} />
              </div>
            </div>
          </Link>
        </button>
      }

      {isExpanded && item.route
        ? item.route.map((i) => {
            return (
              <div className="ml-10  transform translate-x-4" key={i.id}>
                <RouteLink {...i} />
              </div>
            );
          })
        : null}
    </>
  );
};
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const roleType = useSelector(
    (state: AppState) => state.userReducer?.user?.user?.role
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const currentRoute = dashRoutes?.[roleType];
  const [logoutMutation] = useLogoutUserMutation();

  const logout = async () => {
    await logoutMutation();
    router.push("/auth");
    dispatch(logoutUser());
  };
  return (
    <div className="bg-[#F7F5FA]/80">
      <div className="grid grid-cols-12 ">
        <div className="py-2 col-span-3 dash-bg max-w-[17rem]">
          <div className="flex flex-col items-end p-3 pl-4 pr-0">
            <div className="flex items-start w-48 mb-12">
              <img src="/avatar.svg" alt="profile" className="w-1/5" />
            </div>
            {currentRoute
              ? currentRoute.map((item) => {
                  return <RouteLink {...item} />;
                })
              : null}
            <div className="  w-3/4  ">
              <hr className="bg-grey-6/40  border-0 h-[0.2rem] w-3/4 my-10"></hr>
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={logout} className="flex items-center text-white">
              <Logout className="mr-2" />
              Logout
            </button>
          </div>

          <div>
            <div className="text-white p-3 flex justify-center flex-col mt-6 bg-white/20 mx-4 rounded-3xl">
              <div className="text-center font-bold my-3 text-xl mb-5">
                Settings
              </div>
              <div className="">
                There is no end in learning.A lot of efforts are needed for
                final achievement.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 p-12 pt-3">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
