import Button from "@components/commons/button";

const Offer = () => {
  return (
    <div className="py-16">
      <div className="mb-6 text-2xl font-bold text-center">What We Offer</div>

      <div>
        <div className="flex flex-wrap justify-between">
          <div className="max-w-xs p-6 text-center border rounded-lg shadow-lg light:bg-white ">
            <div className="inline-block p-4 mb-3 bg-red-500 rounded-full "></div>
            <p className="mb-3 text-xl font-bold">Web2</p>
            <p>For newbies in tech and software programmers.</p>
            <Button className="p-1 mt-3 border rounded-md border-brand-pink ">
              16 Weeks
            </Button>
          </div>

          <div className="max-w-xs p-6 text-center border rounded-lg shadow-lg light:bg-white ">
            <div className="inline-block p-4 mb-3 bg-red-500 rounded-full "></div>
            <p className="mb-3 text-xl font-bold">Web3</p>
            <p>Web2 programmers transitioning to blockchain expertise</p>
            <Button className="p-1 mt-3 border rounded-md border-brand-pink ">
              16 Weeks
            </Button>
          </div>
          <div className="max-w-xs p-6 text-center border rounded-lg shadow-lg light:bg-white ">
            <div className="inline-block p-4 mb-3 bg-red-500 rounded-full "></div>
            <p className="mb-3 text-xl font-bold"> MasterClass</p>
            <p> For Web3Bridge Alumni including Professionals.</p>
            <Button className="p-1 mt-3 border rounded-md border-brand-pink ">
              10 Weeks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
