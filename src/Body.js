import React from 'react'


//components 
import Header from './components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './components/Browse/Browse'
import Login from './components/Login/Login'
import WatchTrailer from './components/WatchTrailer/WatchTrailer'
const Body = () => {

  
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>

    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/watch/:id",
      element:<WatchTrailer/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body