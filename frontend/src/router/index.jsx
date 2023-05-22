import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
// const Loading = lazy(() => import("../components/Loading"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route path="/loading" element={<Loading />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
