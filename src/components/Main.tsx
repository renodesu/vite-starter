import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <main className="flex-grow p-2">
      <Outlet />
    </main>
  )
}

export default Main
