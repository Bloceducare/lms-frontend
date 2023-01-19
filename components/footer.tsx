import { webSiteInfo } from "config/data";

const Footer = () => {
  return (
    <div className="text-white bg-brand-blue-three font-abel ">
      <div className="flex flex-wrap items-center justify-between max-w-5xl px-4 py-10 mx-auto opacity-80">
        <div>
          <div className="flex mb-5 text-xl ">
            <img src="/book-icon.png" className="mr-1" />
            {webSiteInfo.title}
          </div>
          <div>
            <p className="mb-3">
              © {new Date().getFullYear()} {webSiteInfo.title}
            </p>
            <p>My Web3bridge Portalis a registered</p>
            <p> trademark of Web3bridge</p>
          </div>
        </div>
        <div className="flex">
          <div className="px-10">
            <div className="flex mb-5 text-2xl ">General</div>
            <div>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>FAQ </li>
              </ul>
            </div>
          </div>

          <div className="px-10">
            <div className="flex mb-5 text-2xl ">Quick Links</div>
            <div>
              <ul>
                <li> Community </li>
                <li>Events </li>
                <li>Resources </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
