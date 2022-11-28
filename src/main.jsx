import React from "react";
import store from "./store";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import AddBook from "./Components/AddBook";
import BookInfo from "./Components/Book/BookInfo";
import BookContainer from "./Components/Book/BookContainer";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <BookContainer /> },
      { path: "add", element: <AddBook /> },
      { path: "bookInfo/:id", element: <BookInfo /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routers}>
      <App />
    </RouterProvider>
  </Provider>
);
