import Play from "@components/icons/Play";
import Loader from "@components/Loader";
import { useGetRecordingsQuery } from "@services/api";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import { useRouter } from "next/router";
import YoutubeEmbed from "@components/YoutubeEmbed";

const StudentRecordings = () => {
  const { data, isLoading } = useGetRecordingsQuery(90);

  const router = useRouter();

  const getVidLink = (link) => {
    const li = link.split("watch?v=");
    if (li.length > 1) return li?.[1];
    return "";
  };
  return (
    <>
      <div className="mx-auto border">
        <YoutubeEmbed embedId={"ysz5S6PUM-U"} />
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="25rem"
        /> */}
      </div>

      <div className="mt-6">
        <h2 className="font-bold mb-6 text-xl">Recordings</h2>
        {isLoading ? <Loader /> : null}

        {data
          ? data?.map((rec) => (
              <div
                key={rec.id}
                className="flex justify-between items-center px-8 box-s-3 py-8 mb-6"
              >
                <div className="flex items-center">
                  <div>
                    <span className="p-5 text-brand-red-one text-2xl rounded-lg border mr-7">
                      01
                    </span>
                  </div>
                  <div>
                    <div className="font-bold">{rec?.title}</div>
                    <div>
                      <small>{rec?.description}</small>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href={`${router.pathname}/${getVidLink(rec.link)}`}>
                    <Play className="scale-300 cursor-pointer" />
                  </Link>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};
export default StudentRecordings;
