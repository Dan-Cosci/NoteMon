import { getNotes } from "@/services/notes"
import { useEffect, useState } from "react"

interface CardProp{
  title: string
  content: string
  created_at: string
  updated_at:string
}

const Cards = ( prop: CardProp ) => {
  return (
    <div className="rounded-lg bg-neutral-800 p-4 flex flex-col gap-4">
      <div>
        <h2 className="break-words font-bold text-xl">{prop.title}</h2>
        <p className="break-words text-neutral-400">{prop.content.slice(0, 64)}...</p>
      </div>
      <div className="flex justify-between">
        <p className="break-words text-sm text-neutral-600">{prop.created_at}</p>
        <p className="break-words text-sm text-neutral-600">{prop.updated_at}</p>
      </div>
    </div>
  )
}

function NoteView() {


  const [cards, setCards] = useState<CardProp[]>([])

  useEffect(() => {
    const init = async () => {
      const data = await getNotes()
      console.log(data)

      setCards(data ?? [])

    }

    init()
  }, [])

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-min grow gap-2 p-2 ">
      {cards.map((it)=>(Cards(it)) )}
    </section>
  )
}

export default NoteView
