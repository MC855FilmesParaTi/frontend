import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { SearchResultsPage } from "./pages";
import HomePage, { loader as HomeLoader } from "pages/HomePage/HomePage";
import MoviePage, { loader as MovieLoader } from "./pages/MoviePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: HomeLoader,
  },
  {
    path: "/movie/:movieId",
    element: <MoviePage />,
    loader: MovieLoader,
  },
  {
    path: "/search",
    element: <SearchResultsPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
