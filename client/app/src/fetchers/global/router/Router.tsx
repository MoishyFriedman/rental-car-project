import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/LandingPage";
import Layout from "../layout/Layout";
import CarsCards from "../../cars/pages/CarsPage";
import Table from "../../cars/pages/Table";
import Account from "../../users/pages/Account";
import AddCarPage from "../../cars/pages/addCarPage";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route path="/home" element={<Landing />} /> */}
        <Route path="/carsPage" element={<CarsCards />} />
        <Route path="/addCarPage" element={<AddCarPage />} />
        {/* <Route path="/carsTable" element={<Table />} /> */}
        <Route path="/account" element={<Account />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
