import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <div>{import.meta.env.VITE_BACKEND_URL}</div>
    </>
  )
}
