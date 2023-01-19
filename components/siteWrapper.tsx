import { IChild } from "config/inteface";

interface ISiteWrapper extends IChild {
  className?: String;
}

const SiteWrapper = ({ children, className }: ISiteWrapper) => {
  return <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>;
};

export default SiteWrapper;
