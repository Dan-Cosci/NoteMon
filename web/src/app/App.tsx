import Editor from "@/components/Editor";
import FNav from "@/components/FNav";
import Login from "@/components/Login";
import NoteView from "@/components/NoteView";
import Register from "@/components/Register";
import Sidebar from "@/components/Sidebar";
import AuthStore from "@/store/AuthStore";
import { useEffect } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router";

const Layout = () => {
  const { isAuthenticated, checkSession } = AuthStore()

  useEffect(() => {
    const init = async () => {
      await checkSession()
    }

    init()
  },[])


  if (!isAuthenticated) return <Navigate to="/auth/login" replace />
  return (
    <>
      <Sidebar />
      <main className="bg-neutral-900 min-h-screen w-full text-neutral-100 flex relative px-[1vw] md:px-[5vw] py-10">
        <Outlet />
        <FNav/>
      </main>
    </>
  )
}

const AuthLayout = () => {
  const { isAuthenticated } = AuthStore()

  if (isAuthenticated) return <Navigate to="/" replace />
  return (
    <>
      <main className="bg-neutral-900 min-h-screen w-full text-neutral-100 flex justify-center items-center relative px-[1vw] md:px-[5vw] py-10">
       <Outlet/>
      </main>
    </>
  )
}


const App = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "notes/:slug",element: <Editor /> },
      { path: "create",element: <Editor /> },
      { index: true, element: <NoteView /> },
    ]
  }, {
    path: "auth",
    Component: AuthLayout,
    children: [
      { path: "login" , element: <Login/> },
      { path: "register" , element: <Register/> }
    ]

  }
])

export default App;
