import Editor from "@/components/Editor";
import FNav from "@/components/FNav";
import NoteView from "@/components/NoteView";
import Sidebar from "@/components/Sidebar";
import { createBrowserRouter, Outlet } from "react-router";

const Layout = () => {
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
  return (
    <>
      <main className="">

      </main>
    </>
  )
}


const App = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "notes/:id",element: <Editor /> },
      { index: true, element: <NoteView /> },
    ]
  }, {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/login" , element: <h1>hello</h1> },
      { path: "/register" , element: <h1>hello</h1> }
    ]

  }
])

export default App;
