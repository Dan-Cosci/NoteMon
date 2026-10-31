
const Links = [
  {name: "Home", path: "/",}
]

export function Sidebar() {
	return (
    <aside className="bg-neutral-800 border-r-2 border-neutral-700 text-neutral-100 hidden lg:block min-w-[15vw]">
      <div className="">
        <h1 className="">Hello, { "Daniel"}!</h1>
      </div>
      <div>

      </div>
    </aside>
	);
}

export default Sidebar;
