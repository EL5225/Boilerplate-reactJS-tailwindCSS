import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));
const Navbar = lazy(() => import("../../components/Navbar"));

const Home = () => {
  return (
    <>
      <Navbar />
      <ContentLayout>
        <span className="font-bold text-2xl">Home</span>
      </ContentLayout>
    </>
  );
};

export default Home;
