// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import LifespanBerdiProject from "./pages/projects/LifespanBerdiProject";
import CbdsProject from "./pages/CbdsProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects/",
        element: <Projects />,
      },
      {
        path: "lifespan-berdi-project/",
        element: <LifespanBerdiProject />,
      },
      {
        path: "cbds-project/",
        element: <CbdsProject />,
      },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
