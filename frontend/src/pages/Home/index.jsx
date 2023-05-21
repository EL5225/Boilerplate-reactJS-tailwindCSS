import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Home = () => {
  return <ContentLayout>Home</ContentLayout>;
};

export default Home;
