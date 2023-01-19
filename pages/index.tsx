import type { NextPage } from "next";
import HomeView from "@views/home";
import Header from "@components/header";
import SiteWrapper from "@components/siteWrapper";

const Home: NextPage = () => {
  return (
    <SiteWrapper>
      <Header />
      <HomeView />
    </SiteWrapper>
  );
};

export default Home;
