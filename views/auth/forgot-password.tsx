import Input from "@components/commons/input";
import Button from "@components/commons/button";
import AuthWrapper from "./components/wrapper";

const For = () => {
  return (
    <>
      <AuthWrapper>
        <form className="">
          <div className="">
            <div>{/* <Input type="email" name="email" label="Email" /> */}</div>
            <div className="mb-3">
              <Button className="border-0 w-full bg-brand-red-one text-white uppercase ">
                Change Password
              </Button>
            </div>
          </div>
        </form>
      </AuthWrapper>
    </>
  );
};

export default For;
