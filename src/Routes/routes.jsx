import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Sign in/SignIn";
import SignUp from "../Pages/Sign up/SignUp";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
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
          element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
          loader: () => fetch('/public/Event.json')
        },
        {
          path:'/contact',
          element:<PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path:'/about',
          element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
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