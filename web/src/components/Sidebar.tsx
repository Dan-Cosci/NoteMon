import type { ReactNode } from "react";
import AuthStore from "@/store/AuthStore";
import { FaHome } from "react-icons/fa";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router";
import NoteStore from "@/store/NoteStore";

const MainLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Dashboard", path: "/", icon: <LuLayoutDashboard />},
  { name: "Create Note", path: "/create", icon: <HiOutlineDocumentAdd /> },
]

const Notebooks = [
  { name: "Unlabled", path: "/", icon: <FaHome /> },
  { name: "Personal", path: "/", icon: <LuLayoutDashboard />},
  { name: "Work", path: "/", icon: <HiOutlineDocumentAdd /> },
]

const NavModules = ({children, header = "" }: {children: ReactNode, header?: string}) => {
  return (
    <div className="flex flex-col gap-1">
      {header ? <label className="font-bold text-sm text-neutral-500">
        {header}
      </label> : ""}
      { children }
    </div>
  )
}

export function Sidebar() {
  const { user } = AuthStore()
  const { Notes } = NoteStore()

	return (
    <aside className="bg-neutral-800 border-r-2 border-neutral-700 text-neutral-100 hidden lg:flex flex-col min-w-[16vw] p-4">
      <div className="items-center flex gap-4 py-8">
        <div className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-400/10 text-neutral-100">
          <span className="text-2xl font-bold">N</span>
        </div>
        <div className="text-center">
          <span className="text-xl font-bold">WRITE A STORY</span>
        </div>
      </div>
      <nav className="flex flex-col gap-6">

        <NavModules>
          {MainLinks.map(el => (
            <NavLink to={el.path} className="flex items-center px-4 py-2 rounded-full gap-2 text-lg hover:bg-neutral-700">
              { el.icon }
              { el.name }
            </NavLink>
          ))}
        </NavModules>
        <NavModules header="Notebooks">
          {Notebooks.map(el => (
            <NavLink to={el.path} className="flex items-center px-4 py-2 rounded-full gap-2 text-lg hover:bg-neutral-700">
              { el.icon }
              { el.name }
            </NavLink>
          ))}
        </NavModules>


      </nav>

    </aside>
	);
}

export default Sidebar;
