import { FaHome } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";

export default function FNav() {
  return (
    <nav className="bg-neutral-800 text-neutral-600 p-2 rounded-full fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-5 drop-shadow-2xl">
      <button className="text-4xl p-2 rounded-full"><FaPencil /></button>
      <button className="text-4xl p-2 rounded-full"><FaHome /></button>
      <button className="text-4xl p-2 rounded-full"><FaTrash /></button>
    </nav>
  )
}
