import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Layout from "../layout/Layout";
import CarsCards from "../../cars/pages/CarsCards";
import Table from "../../cars/pages/Table";
import Account from "../../users/pages/Account";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Landing />} />
          <Route path="/cards" element={<CarsCards />} />
          <Route path="/table" element={<Table />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
