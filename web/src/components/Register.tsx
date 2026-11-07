
import { useState } from "react"

export default function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")
  const [show, setShow] = useState(false)

  const passwordsMatch = password === repassword

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!passwordsMatch) return

    console.log({ email, username, password })
  }

  return (
    <section className="w-full max-w-md">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-400/10 text-neutral-100">
          <span className="text-2xl font-bold">N</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">
          Create an account
        </h1>

        <p className="mt-2 text-sm text-neutral-400">
          Get started with NoteMon today.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-7 shadow-2xl shadow-black/20 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-neutral-300"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              autoComplete="username"
              placeholder="Choose a username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-neutral-400"
            />
          </div>

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
            <label
              htmlFor="password"
              className="text-sm font-medium text-neutral-300"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                placeholder="Create a password"
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

          <div className="flex flex-col gap-2">
            <label
              htmlFor="repassword"
              className="text-sm font-medium text-neutral-300"
            >
              Confirm password
            </label>

            <input
              type={show ? "text" : "password"}
              id="repassword"
              autoComplete="new-password"
              placeholder="Confirm your password"
              required
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              className={`w-full rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 ${
                repassword && !passwordsMatch
                  ? "border-red-500/60 focus:border-red-500"
                  : "border-neutral-800 focus:border-neutral-400"
              }`}
            />

            {repassword && !passwordsMatch && (
              <p className="text-xs text-red-400">
                Passwords do not match.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!passwordsMatch || !password || !repassword}
            className="mt-2 w-full rounded-xl bg-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Create account
          </button>
        </form>

        <div className="mt-6 border-t border-neutral-800 pt-6 text-center">
          <p className="text-sm text-neutral-500">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="font-medium text-neutral-300 transition hover:text-neutral-100"
            >
              Login
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
