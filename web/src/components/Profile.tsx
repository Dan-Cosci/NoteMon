import AuthStore from "@/store/AuthStore";
import { useState, type ReactNode } from "react";
import { CgProfile } from "react-icons/cg";

const Container = ({ children }: {children:ReactNode}) => {

  return (
    <div className="bg-neutral-900 rounded-2xl py-4 px-6 border border-neutral-800 flex items-center">
      { children }
    </div>
  )

}

export function Profile() {
  const { logout, user } = AuthStore()

  const [username, setUsername] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)



  const handleLogout = async () => {
    await logout()
  }

	return (
    <section className="p-4 gap-4 grid md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col ">
        <Container>
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="text-5xl">
                <CgProfile />
              </div>
              <div>
                <p>{user?.name}</p>
                <p>Joined { new Date(user?.createdAt ?? "").toLocaleDateString() }</p>
              </div>
            </div>
            <form action="" className="flex flex-col gap-1" onSubmit={(e) => { e.preventDefault(); console.log("saved") }}>
              <label className="text-neutral-500 text-sm" htmlFor="username">Username</label>
              <input
                className="bg-neutral-800 rounded-xl border border-neutral-700 py-2 px-4 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" />
              <label className="text-neutral-500 text-sm" htmlFor="email">Email</label>
              <input
                className="bg-neutral-800 rounded-xl border border-neutral-700 py-2 px-4 focus:outline-none"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                type="text" />
                <button className="self-end bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700 text-md mt-4">Save</button>
            </form>
          </div>
        </Container>
      </div>
      <div className="flex flex-col gap-4">
        <Container>
          <div className="flex justify-between items-center w-full text-red-500">
            <p className="">Logout Account</p>
            <button onClick={handleLogout}
              className="p-2 rounded-2xl border-2 border-neutral-800"
            >Logout</button>
          </div>
        </Container>
        <Container>
          <div className="flex justify-between items-center w-full text-red-500">
            <p>Delete Account</p>
            <button onClick={handleLogout}
              className="p-2 rounded-2xl border-2 border-neutral-800"
            >Delete</button>
          </div>
        </Container>
      </div>
		</section>
	);
}

export default Profile;
