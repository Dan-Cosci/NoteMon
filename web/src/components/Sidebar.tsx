import { FaHome } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { NavLink } from "react-router";

const Links = [
  { name: "home", path: "/", icon: <FaHome /> },
  { name: "notes", path: "/note/", icon: <FaNoteSticky /> },

]

export function Sidebar() {
	return (
    <aside className="bg-neutral-800 border-r-2 border-neutral-700 text-neutral-100 hidden lg:block min-w-[15vw]">
      <div className="">
        <h1 className="">Hello, { "Daniel"}!</h1>
      </div>
      <nav>
        {Links.map(el => (
          <NavLink to={el.path} >
            { el.name}
          </NavLink>
        ))}
      </nav>
    </aside>
	);
}

export default Sidebar;
