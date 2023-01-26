import React from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Diary from "./pages/diary/Diary"
import Home from "./pages/home/Home"
import New from "./pages/new/New"
import "./styles/app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet className="outlet"/>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <New />,
      },
      {
        path: "/diary",
        element: <Diary />,
      },
    ],
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
