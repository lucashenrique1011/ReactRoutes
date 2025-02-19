import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Segunda from './route/seginda.tsx'
import Primeira from './route/primeira.tsx'
import Erro from './route/error.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Erro/>,
    children:[
      {
        path: "primeira",
        element: <Primeira />
      }, {
        path: "segunda",
        element: <Segunda />
      }]
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
