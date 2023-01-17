import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className="flex-grow p-2">
      <button>foo</button>
      <Outlet />
    </main>
  )
}

export default Main
