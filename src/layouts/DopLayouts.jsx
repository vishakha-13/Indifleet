import { Outlet } from "react-router-dom"
import DopNav from "../components/Global/DopNavBar"

const DopLayouts = () => {
  return (
    <div className="dop-layout">
      <DopNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DopLayouts