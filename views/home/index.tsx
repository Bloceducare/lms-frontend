import Head from "next/head";
import Image from "next/image";
import Offer from "./components/offer";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Web3Bridge Lms </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-wrap py-12 dark:text-white dark:bg-gray-800 md:flex-no-wrap  h-[calc(100vh-60px)]  ">
        <div className="flex items-center w-full px-6 md:w-1/2 ">
          <div className="">
            <div>
              <h1 className="inline-block p-2 mb-4 text-xl font-bold leading-tight bg-white rounded-md text-brand-red-one">
                Never Stop Learning
              </h1>
            </div>
            <div>
              <p className="mb-2 text-5xl font-bold ">
                Access to learning tool in one place
              </p>
            </div>

            <div>
              <p>
                Web3bridge is a hybrid learning program that helps people of
                different skill sets and age groups achieve their goals. We
                create an engaging curriculum that are interactive and encourage
                the learner to think critically.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden w-full px-6 md:w-1/2 md:flex">
          <Image src="/hero-sec.svg" alt="hero img" width={500} height={500} />
        </div>
      </div>
      <Offer />
    </div>
  );
};

export default Home;
