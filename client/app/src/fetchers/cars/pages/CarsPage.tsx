import HeaderComponent from "../components/cards/HeaderComponent";
import CarsCards from "../components/cards/Cards";
import Filter from "../components/filter/Filter";

export default function CarsPage() {
  return (
    <>
      <HeaderComponent />
      <Filter />
      <CarsCards />
    </>
  );
}
