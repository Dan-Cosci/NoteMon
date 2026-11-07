export default function Config() {

  const config = {
    node_env: Bun.env.NODE_ENV,
    port: Bun.env.PORT,
    database: Bun.env.DATABASE,
    better_auth_secret: Bun.env.BA_SECRET,
    frontend_url: Bun.env.F_URL
  }

  return config
}
