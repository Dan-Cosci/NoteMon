import NoteStore from "@/store/NoteStore";
import type { Note } from "@/types";
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router"

const Cards = ({
  id,
  title,
  content,
  created_at,
  updated_at,
}: Note) => {
  return (
    <Link to={`/notes/${id}`}>
      <div className="rounded-lg bg-neutral-900 p-4 flex flex-col justify-between hover:bg-neutral-700 min-w-2xs min-h-52 border-neutral-700 border-1" >
        <div className="flex flex-col gap-2">
          <h2 className="break-words font-bold text-xl">{title}</h2>
          <p className="break-words text-neutral-400">{content.slice(0, 80)}...</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="border-2 border-neutral-700 p-2 rounded-md text-xs text-neutral-400">{ "Untitled"}</p>
          <p className="break-words text-xs text-neutral-400">{new Date(created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  )
}

function NoteView() {
  const { Notes, GetNotes } = NoteStore()
  const navigate = useNavigate()
  const [currNotes, setCurrNotes] = useState<Note[]>([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    const init = async () => {
      await GetNotes()
    }
    init()
  }, [])

  useEffect(() => {
    setCurrNotes(Notes)
    setCurrNotes(Notes.filter((it)=>(it.title.includes(search) || it.content.includes(search))))

  },[Notes,search])

  return (
    <>
      <section className="border-b-2 border-neutral-700 px-[5vw] flex justify-center items-center gap-6 p-4">
        <input
          className="flex-1 focus:outline-none border-2 border-neutral-800 py-2 px-4 rounded-full"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text" />
        <button
          onClick={()=>navigate("/create")}
          className="bg-neutral-300 text-neutral-900 py-2 px-4 rounded-full flex items-center gap-3 justify-center"> <FaPlus /> New Note</button>
      </section>
      <section>
        <div>
          <h1>All Notes:</h1>

        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-min grow gap-2 p-2 px-[5vw]">
          {
            currNotes.map((it) => (
              <Cards key={it.id} {...it} />
            ))
          }
        </div>
     </section>

    </>
  )
}

export default NoteView
