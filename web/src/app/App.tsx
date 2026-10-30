import Editor from "@/components/Editor";
import FNav from "@/components/FNav";
import NoteView from "@/components/NoteView";
import { createBrowserRouter, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen min-w-screen text-neutral-100 flex relative px-[10vw] py-10">
        <Outlet />
        <FNav/>
      </div>
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
  }
])

export default App;
