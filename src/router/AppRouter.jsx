import { Route, Routes } from "react-router-dom"
import { Traffic } from "../pages/Traffic"
import { ParkingLot } from "../pages/ParkingLot"
import { Navbar } from "../ui/components/Navbar"

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="*" element={<Traffic/>}/>
        <Route path="/parkinglot/:number" element={<ParkingLot/>}/>
    </Routes>
    </>
  )
}
