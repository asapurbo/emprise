import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/page/Home'
import Root from './components/rootLayout/Root'
import Activities from "./components/page/Activities";
import TourDetail from "./components/page/TourDetail";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/activities",
          element: <Activities />,
        },
        {
          path: "/tourDetail",
          element: <TourDetail/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
