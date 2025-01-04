import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "../app.css";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import User from "./components/user";
import { lazy } from "react";
import UseContext from "./Utils/UseContext";
import { useContext } from "react";
// import Recepies from "./components/Recepies";

//props=properties

const Applayout = () => {
  return (
    <div>
      <UseContext.Provider value={{ loggedinuser: "elon musk" }}>
        <Header />
      </UseContext.Provider>
      <Outlet />
    </div>
  );
};
const Recepies = lazy(() => {
  return import("./components/Recepies");
});
const About = lazy(() => {
  return import("./components/About");
});
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/user/:userId", element: <User /> },
      {
        path: "/recepies",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Recepies />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
