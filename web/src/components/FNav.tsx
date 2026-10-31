import { FaHome } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";

export default function FNav() {
  return (
    <nav className="bg-neutral-800 text-neutral-600 p-2 fixed bottom-0 left-1/2 -translate-x-1/2 flex lg:hidden justify-evenly gap-5 border-t-2 border-neutral-700 shadow-2xl shadow-neutral-900  w-full">
      <button className="text-2xl p-2 rounded-full"><FaPencil /></button>
      <button className="text-2xl p-2 rounded-full"><FaHome /></button>
      <button className="text-2xl p-2 rounded-full"><FaTrash /></button>
    </nav>
  )
}
