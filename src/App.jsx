import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
//import Cart from './pages/Cart';
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
}
from "react-router-dom";
import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Product.Jsx';


const Layout =()=>{
  return(

    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />

    </div>
  );

};

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />,
        loader: () => productsData(),
      },
      {
        path:"/cart",
        element: <Cart />,
      },
      {
        path:"/product/:id",
      element:<Product/>
      },
    ],
  },
]);


function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider  router={router}/>
    </div>
  );
}

export default App;


