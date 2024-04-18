// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useState } from "react";

import Root from "./src/routes/root";
// import Home from "./pages/Home";
import Projects from "./src/pages/Projects";
import About from "./src/pages/About";
import LifespanBerdiProject from "./src/pages/projects/LifespanBerdiProject";
import CbdsProject from "./src/pages/projects/CbdsProject";
// import BarderProject from "./pages/projects/BarderProject";
// import FoodSustainabilityProject from "./pages/projects/FoodSustainabilityProject";
// const [mode, setMode] = useState("light-mode");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: "projects/",
        element: <Projects />,
      },
      {
        path: "lifespan-berdi-project/",
        element: <LifespanBerdiProject mode={"dark-mode"} />,
      },
      // {
      //   path: "barder-project/",
      //   element: <BarderProject mode={"dark-mode"} />,
      // },
      {
        path: "cbds-project/",
        element: <CbdsProject mode={"dark-mode"} />,
      },
      // {
      //   path: "food-sustainability-project/",
      //   element: <FoodSustainabilityProject mode={"dark-mode"} />,
      // },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className="mode-selection">
      <button onClick={setMode("light-mode")}>Light</button>
      <button onClick={setMode("dark-mode")}>Dark</button>
      <button onClick={setMode("dark-mode")}>Beige</button>
      <button onClick={setMode("fun-2008")}>Fun 2008</button>
    </div> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
// function App() {
//   return (
//     <div className="App">
//       ...
//       <RouterProvider router={router} />
//     </div>
//   );
// }
