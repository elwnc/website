import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <div>
        <img
          src="/assets/background-full.webp"
          srcSet="/assets/background-hd.webp 1280w, /assets/background-fhd.webp 1920w, /assets/background-full.webp"
          alt="..."
          style={{ width: '100%' }}
        />
      </div>
    </>
  )
}
