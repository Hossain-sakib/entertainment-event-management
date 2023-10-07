import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Sign in/SignIn";
import SignUp from "../Pages/Sign up/SignUp";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute";
// import PrivateRoute from "./PrivateRoute";






const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('/public/Event.json')
        },
        {
          path:'/events/:id',
          element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>
        },
        {
            path:'/signin',
            element: <SignIn></SignIn>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        },

      ]
    },
  ]);

  export default router;