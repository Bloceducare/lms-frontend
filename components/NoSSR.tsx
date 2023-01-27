import React, { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const NoSSR = ({ children }: IProps) => {
  const [canRender, setCanRender] = useState<boolean>(false);

  useEffect(() => {
    setCanRender(true);
  }, []);

  return <>{canRender ? children : ""}</>;
};

export default NoSSR;
