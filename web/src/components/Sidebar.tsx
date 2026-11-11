import AuthStore from "@/store/AuthStore";
import { FaHome } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { NavLink } from "react-router";

const Links = [
  { name: "home", path: "/", icon: <FaHome /> },
  { name: "new note", path: "/create", icon: <FaNoteSticky /> },
]

interface ModuleItems {
  name: string
  id: string
}

const Modules = (items: ModuleItems[]) => {
  return (
    <div>
      <nav>

      </nav>
    </div>
  )
}

export function Sidebar() {
  const { user } = AuthStore()

	return (
    <aside className="bg-neutral-800 border-r-2 border-neutral-700 text-neutral-100 hidden lg:flex flex-col min-w-[19vw] p-4">
      <div className="items-center flex gap-4 py-8">
        <div className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-400/10 text-neutral-100">
          <span className="text-2xl font-bold">N</span>
        </div>
        <div className="text-center">
          <span className="text-xl font-bold">WRITE A STORY</span>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {Links.map(el => (
          <NavLink to={el.path} className="flex items-center px-4 py-2 rounded-full gap-2 text-lg hover:bg-neutral-700">
            { el.icon }
            { el.name }
          </NavLink>
        ))}
      </nav>
    </aside>
	);
}

export default Sidebar;
