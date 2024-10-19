
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MoviePlay from "./MoviePlay";

const Body = () => {

  

 const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse/>
    },
    {
      path: "/movie/:id",
      element: <MoviePlay />,
    },
    
 ]);

 



  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body