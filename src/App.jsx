import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Error, Home, ItemsPage, Landing, SingleItem } from './pages';

const router=createBrowserRouter([
  {
    path:'/react-real-estate',
    element:<Home/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
      },
      {
        path:'/react-real-estate/items',
        element:<ItemsPage/>,
      },
      {
        path:'/react-real-estate/items/:id',
        element:<SingleItem/>
      },{
        path:'/react-real-estate/about',
        element:<About/>
      }
    ]

  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App