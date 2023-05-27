import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div>{children}</div>;
};

export default PageContainer;