import { betterAuth } from "better-auth";
import Config from "../core/config";
import Database from "bun:sqlite"

export const createAuth = (cfg: ReturnType<typeof Config>, db: Database) => {
  return betterAuth({
    database: db,
    secret: cfg.better_auth_secret,
    trustedOrigins: [cfg.frontend_url,"http://192.168.254.103:5173", "http://localhost:8080"],
    basePath: "/api/v1/auth",
    baseURL: "http://192.168.254.103:5173",


    emailAndPassword: {
      enabled:true
    }
  })
}
