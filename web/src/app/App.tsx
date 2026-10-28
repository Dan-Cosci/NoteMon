import Editor from "@/components/Editor";
import FNav from "@/components/FNav";
import NoteView from "@/components/NoteView";
import { createBrowserRouter, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen min-w-screen text-neutral-100 flex relative">
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
      { index: true, element: <Editor /> },
      { path: "notes", element: <NoteView /> },
    ]
  }
])

export default App;
