import { useEffect, useState } from "react";

export function Editor() {
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  useEffect(() => {

  }, [])


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
          content={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Writes what is on your mind..."
          className="appearance-none border-none bg-transparent resize-none hover:outline-none focus:outline-hidden w-full min-h-full"
        />
      </div>
		</article>
	);
}

export default Editor;
