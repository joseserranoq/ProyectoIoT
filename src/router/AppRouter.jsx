import { Route, Routes } from "react-router-dom"
import { Traffic } from "../pages/Traffic"
import { ParkingLot } from "../pages/ParkingLot"
import { Navbar } from "../ui/components/Navbar"
import { Parking } from "../pages/Parking"

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Traffic />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/parkinglot/:number" element={<ParkingLot />} />
      </Routes>
    </>
  )
}
