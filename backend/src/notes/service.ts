import { repository } from "./repo";

export const service = (repo: ReturnType<typeof repository>) => {
  return {
    getNotes: () => repo.getNotes()

  }
}
