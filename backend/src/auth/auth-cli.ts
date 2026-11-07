import { betterAuth } from "better-auth";
import { Database } from "bun:sqlite";
import Config from "../core/config";

const cfg = Config();

if (!cfg.database) {
  throw new Error("DATABASE environment variable is missing");
}

if (!cfg.better_auth_secret) {
  throw new Error("BA_SECRET environment variable is missing");
}

if (!cfg.frontend_url) {
  throw new Error("F_URL environment variable is missing");
}

const db = new Database(cfg.database);

export const auth = betterAuth({
  database: db,
  secret: cfg.better_auth_secret,
  trustedOrigins: [cfg.frontend_url],
  basePath: "/api/v1/auth",
  baseURL: "http://localhost:8080",

  emailAndPassword: {
    enabled: true,
  },
});

export default auth;
