import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Loading = () => {
  return (
    <ContentLayout>
      <div className="font-bold animate-bounce text-3xl">Loading ...</div>
    </ContentLayout>
  );
};

export default Loading;
