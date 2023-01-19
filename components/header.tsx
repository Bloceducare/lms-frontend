import ThemeSwitch from "./themeSwitch";
import { webSiteInfo } from "../config/data";

interface IHeader {
  className?: String;
}
const Header = ({ className = "" }: IHeader) => {
  return (
    <div className={`flex items-center justify-between p-6 ${className}`}>
      <div className="text-xl font-bold ">{webSiteInfo.title}</div>
      <div className="flex items-center ">
        <div className="">My Account</div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
