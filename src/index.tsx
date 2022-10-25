import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { LoginPage, SearchResultsPage } from "./pages";
import HomePage, { loader as HomeLoader } from "pages/HomePage/HomePage";
import MoviePage, { loader as MovieLoader } from "./pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: HomeLoader,
    // element: (
    //   <div>
    //     <HomePage />
    //     <MoviePage
    //       Poster="https://news.artnet.com/app/news-upload/2015/04/lf-256x256.jpg"
    //       Year="2022"
    //       Duration="2h03min"
    //       Director="Tarantino"
    //       Writer="J.K. Rowling"
    //       Stars="Sun, Andrômeda, Sirius"
    //       About="I have no idea, watch to discover!"
    //       imdbScore="9.7"
    //       Popularity="167"
    //       PopularityDelta="-21"
    //     />
    //   </div>
    // ),
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
