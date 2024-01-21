/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import Friends from './Components/Friends/Friends.jsx';
import FriendDetail from './Components/FriendDetail/FriendDetail.jsx';
import Posts from './Components/Posts/Posts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
            path: "/",
            element: <App></App>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
  },
  {
    path: "friend/:friendId",
    element: <FriendDetail></FriendDetail>,
    loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
},
{
  path: "posts",
  element: <Posts></Posts>,
  loader:() => fetch('https://jsonplaceholder.typicode.com/posts')
},
      {
        path: "about",
        element: <About></About>,
      },
      {
             path: "contact",
             element: <Contact></Contact>,
       },
    ]
  },
  
]);

// const router = createBrowserRouter([
//  
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>   
  </React.StrictMode>,
)
