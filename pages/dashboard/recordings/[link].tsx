import { useRouter } from "next/router";
import DashboardLayout from "@layout/dashboard";
import YoutubeEmbed from "@components/YoutubeEmbed";

const Recording = () => {
  const router = useRouter();

  return (
    <>
      <div>
        {/* <div></div> */}
        <YoutubeEmbed embedId={router.query.link} />
      </div>
    </>
  );
};

Recording.PageLayout = DashboardLayout;
export default Recording;
