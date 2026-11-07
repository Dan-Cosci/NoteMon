
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <section className="w-full max-w-md">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-400/10 text-neutral-100">
          <span className="text-2xl font-bold">N</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-neutral-400">
          Sign in to continue to NoteMon.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-7 shadow-2xl shadow-black/20 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-300"
            >
              Email address
            </label>

            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-neutral-300"
              >
                Password
              </label>
            </div>

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 pr-16 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-400"
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-neutral-500 transition hover:text-neutral-200"
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-neutral-400 px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-300 active:scale-[0.99]"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 border-t border-neutral-800 pt-6 text-center">
          <p className="text-sm text-neutral-500">
            Don't have an account?{" "}
            <a
              href="/auth/register"
              className="font-medium text-neutral-300 transition hover:text-neutral-100"
            >
              Create one
            </a>
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-neutral-600">
        Your thoughts, organized in one place.
      </p>
    </section>
  )
}
