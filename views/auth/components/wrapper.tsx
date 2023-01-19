import Image from "next/image";
import SiteWrapper from "@components/siteWrapper";
import { IChild } from "config/inteface";

const AuthWrapper = ({ children }: IChild) => {
  return (
    <>
      <div className=" dark:text-white dark:bg-gray-800 md:flex-no-wrap ">
        <SiteWrapper className="max-w-6xl flex flex-wrap py-12">
          <div className="hidden w-full px-6 md:w-1/2 md:flex  flex-col">
            <div>
              <p className="mb-8 text-4xl font-bold ">
                Welcome to My Web3bridge
                <div>Portal</div>
              </p>
            </div>
            <Image
              src="/auth-img.svg"
              alt="hero img"
              width={500}
              height={500}
            />
          </div>
          <div className="flex items-center w-full justify-center  md:w-1/2 flex-col">
            <div className="w-full ">
              <div className="max-w-md mx-auto">{children}</div>
            </div>
          </div>
        </SiteWrapper>
      </div>
    </>
  );
};

export default AuthWrapper;
