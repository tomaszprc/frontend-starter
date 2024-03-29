import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/routeList";
import { Suspense } from "react";
import ApolloContext from "./contexts/ApolloContext";
import QueryContext from "./contexts/QueryContext";

function App() {
  return (
    <>
      <Suspense fallback="Loading..">
        <ApolloContext>
          <QueryContext>
            <BrowserRouter>
              <Routes>
                {routes.map(({ path, Component }) => {
                  return (
                    <Route key={path} path={path} element={<Component />} />
                  );
                })}
              </Routes>
            </BrowserRouter>
          </QueryContext>
        </ApolloContext>
      </Suspense>
    </>
  );
}

export default App;
