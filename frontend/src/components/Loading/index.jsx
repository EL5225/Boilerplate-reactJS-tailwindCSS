import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Loading = () => {
  return <ContentLayout className="font-bold">Loading ...</ContentLayout>;
};

export default Loading;
