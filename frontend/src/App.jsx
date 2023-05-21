import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const Router = lazy(() => import("./router"));
const Loading = lazy(() => import("./components/Loading"));
const Error = lazy(() => import("./components/Error"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary fallback={<Error />}>
        <Router />
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
