import { Outlet } from "react-router-dom"
import DriverNav from "../components/Global/DriverNavBar"

const DopLayouts = () => {
  return (
    <div className="dop-layout">
      <DriverNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DopLayouts