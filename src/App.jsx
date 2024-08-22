
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 Outlet
} from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import { Preferences } from "./pages/Settings/Preferences";
 import { Notifications } from "./pages/Settings/Notifications";
 import { Security } from "./pages/Settings/Security";
import Orders from "./pages/Orders";
import SupportScreen from "./pages/Support/Screens/SupportScreen";
import Contact from "./pages/Support/Screens/Contact";
import FAQ from "./pages/Support/Screens/FAQScreen";

function App() {

const Layout = () =>{
  return (
    <div className="main">
      <Navbar/>
      <div className="container w-full h-full">
        <div className="menuContainer w-max sm:w-[250px] ">
          <Menu/>
        </div>
        <div className="contentContainer flex-grow">
          <Outlet />
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}



    const router = createBrowserRouter([
      {
        path: "/",
        element: 
          <Layout/>,
          children:[
      
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/users",
        element: <Users/>,
      },
      {
        path: "/orders",
        element: <Orders/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/settings",
        element: <Preferences/>,
      },
      {
        path: "/settings/security",
        element: <Security/>,
      },
      {
        path: "/settings/notifications",
        element: <Notifications/>,  
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/faq",
        element: <FAQ/>,
      },
      // {
      //   path: "/supportscreen",
      //   element: <SupportScreen/>,
      // },

    ],
  },
      {
        // notice that when you navigate to the login screen the menu and others do not appear there. This is because it is not part of the layout.
        path: "login",
        element: <Login/>,
      },
    ]);
    
   return <RouterProvider router={router} />;
  
}

export default App
