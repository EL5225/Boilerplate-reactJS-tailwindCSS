import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Error = () => {
  return (
    <ContentLayout>
      <div className="font-bold animate-bounce text-3xl">
        Error 404 Not Found
      </div>
    </ContentLayout>
  );
};
export default Error;
