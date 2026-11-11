import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/assets/css/index.css"
import App from '@/app/App.tsx'
import { RouterProvider } from 'react-router'
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={App} />
  </StrictMode>,
)
