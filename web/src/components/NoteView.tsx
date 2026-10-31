import { getNotes } from "@/services/notes"
import { useEffect, useState } from "react"
import { Link } from "react-router"

interface CardProp{
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string,
}

const Cards = ({
  id,
  title,
  content,
  created_at,
  updated_at,
}: CardProp) => {
  return (
    <Link to={`/notes/${id}`}>
      <div className="rounded-lg bg-neutral-800 p-4 flex flex-col justify-between hover:bg-neutral-700 min-h-48" >
        <div>
          <h2 className="break-words font-bold text-xl">{title}</h2>
          <p className="break-words text-neutral-400">{content.slice(0, 64)}...</p>
        </div>
        <div className="flex justify-between">
          <p className="break-words text-sm text-neutral-600">{created_at}</p>
          <p className="break-words text-sm text-neutral-600">{updated_at}</p>
        </div>
      </div>
    </Link>
  )
}

function NoteView() {
  const [cards, setCards] = useState<CardProp[]>([])

  useEffect(() => {
    const init = async () => {
      const data = await getNotes()
      setCards(data ?? [])

    }

    init()
  }, [])

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-min grow gap-2 p-2 ">
      {
        cards.map((it) => (
          <Cards {...it} />
        ))
      }
    </section>
  )
}

export default NoteView
