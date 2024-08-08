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

function App() {

const Layout = () =>{
  return (
    <div className="main">
      <Navbar/>
      <div className="container w-full h-full">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
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
        path: "users",
        element: <Users/>,
      },
      {
        path: "products",
        element: <Products/>,
      },
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
