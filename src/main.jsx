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
// import WishlistBooks from './components/WishlistBooks';

const router = createBrowserRouter([
  {
    path: "/",
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
      // {
      //   path:'.ges/BookDetails/:bookName/Pa',
      //   element:<WishlistBooks></WishlistBooks>,
      //   loader:() => fetch('fake.json'),
      // },
      {
        path:'/readBook',
        element:<ReadBooks></ReadBooks>,
        loader:() =>fetch('/fake.json')
      },
      {
        path:'/readpage',
        element:<PagesToRead></PagesToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
