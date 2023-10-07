import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('/public/Event.json')
        }
      ]
    },
  ]);

  export default router;