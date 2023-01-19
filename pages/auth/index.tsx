import Header from "@components/header";
import SiteWrapper from "@components/siteWrapper";
import Login from "@views/auth";

const Auth = () => {
  return (
    <>
      <SiteWrapper className="max-w-6xl">
        <Header className="mb-0" />
      </SiteWrapper>
      <Login />
    </>
  );
};

export default Auth;
