import Button from "@components/commons/button";

const NotFound = () => {
  return (
    <div className="flex justify-center h-screen items-center flex-col">
      <h2 className="text-3xl">404 Not Found</h2>
      <Button className="mt-3">Go Home</Button>
    </div>
  );
};

NotFound.PageLayout = "";
export default NotFound;
