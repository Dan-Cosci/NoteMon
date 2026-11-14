import { useDebouce } from "@/hooks/UseDebounce";
import { createNote, getNote, updateNote } from "@/services/notes";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";

export function Editor() {

  const navigate = useNavigate()
  const { slug } = useParams<{ slug?: string }>()
  const [initialized, setInitialized] = useState(false)

  const [noteId, setNoteId] = useState<string | null>(null)
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const lastSaved = useRef<{title: string, content:string} | null>(null)
  const creatingRef = useRef(false)

  const debouncedTitle = useDebouce(title, 800)
  const debouncedContent = useDebouce(content, 800)


  // note initialization when note is present
  useEffect(() => {
    const init = async () => {
      if (!slug) {
        setInitialized(true)
        return
      }

      try {
        const data = await getNote(slug)
        setNoteId(data.id)
        setTitle(data.title)
        setContent(data.content)

        lastSaved.current = { title: data.title, content: data.content }

      } catch (err) {
       	console.error(err);
      } finally {
        setInitialized(true)

      }
    }

    init()
  }, [slug])

  // on create
  useEffect(() => {
    if (!initialized || noteId || creatingRef.current) return
    if (!debouncedTitle.trim()) return


    const create = async () => {
      creatingRef.current = true

      try {
        console.log("I am saving your shit")
        const note = await createNote({ title: debouncedTitle, content: debouncedContent })
        setNoteId(note.id)
        lastSaved.current = { title: note.title, content: note.content }

        navigate(`/notes/${note.id}`, {replace:true})

      } catch (err) {
        console.error(err);
      } finally {
        creatingRef.current = false
      }
    }

    create()
  }, [debouncedContent, debouncedTitle, noteId])

  // updating the note
  useEffect(() => {
    if (!noteId || !initialized) return

    const prev = lastSaved.current
    if (prev?.title === debouncedTitle && prev?.content === debouncedContent) return

    const update = async () => {
      try {
        const data = await updateNote({
          id:noteId,
          content: debouncedContent,
          title:debouncedTitle
        })

        lastSaved.current = {title: data.title, content:data.content}
      } catch (err) {
        console.error(err);
      } finally {

      }
    }

    update()
  },[debouncedContent, debouncedTitle, noteId])

	return (
    <article className="flex flex-col px-8 py-6 grow">
      <div className="w-full border-b-neutral-400 border-b-2 py-1">
        <input type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What will you calls me?"
          className="appearance-none border-none bg-transparent hover:outline-none focus:outline-hidden text-2xl font-bold text-center w-full"
        />
      </div>
      <div className="w-full flex justify-between mb-8">
        <p className="text-neutral-700 text-sm p-2">created: 10/20/2026</p>
        <p className="text-neutral-700 text-sm p-2">last update: 10/20/2026</p>
      </div>
      <div className="h-full w-full">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Writes what is on your mind..."
          className="appearance-none border-none bg-transparent resize-none hover:outline-none focus:outline-hidden w-full min-h-full"
        />
      </div>
		</article>
	);
}

export default Editor;
