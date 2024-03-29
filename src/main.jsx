import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Pages/Home';
import ListedBooks from './components/Pages/ListedBooks';
import PagesToRead from './components/Pages/PagesToRead';
import BookDetails from './components/Pages/BookDetails';
import ReadBooks from './components/ReadBooks';
import WishlistBooks from './components/WishlistBooks';
import Review from './components/Pages/Review';
import About from './components/Pages/About';
import ErorPage from './components/Pages/ErorPage';


const router = createBrowserRouter([
  {
    path: "/",
     errorElement:<ErorPage></ErorPage>,
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home> ,
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
        loader:() => fetch('/fake.json'),
      },
      {
        path:'/book/:bookId',
        element:<BookDetails></BookDetails>,
        loader:() => fetch('/fake.json'),
      },
      {
        path:'/wishbook',
        element:<WishlistBooks></WishlistBooks>,
        loader:() => fetch('/fake.json'),
      },
      {
        path:'/readBook',
        element:<ReadBooks></ReadBooks>,
        loader:() =>fetch('/fake.json')
      },
      {
        path:'/readpage',
        element:<PagesToRead></PagesToRead>,
        loader:() => fetch('/fake.json'),
      },
      {
        path:'/review',
        element:<Review></Review>
      },
      {
        path:'/about',
        element:<About></About>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
