import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Error = () => {
  return <ContentLayout className="font-bold">Error</ContentLayout>;
};
export default Error;
