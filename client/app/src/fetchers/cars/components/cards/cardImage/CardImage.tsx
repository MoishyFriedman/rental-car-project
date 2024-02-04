import { CarImg } from "../card.styled";

export default function CardImg(prop: { img: string; alt: string }) {
  return (
    <>
      <CarImg src={prop.img} alt={prop.alt} />
    </>
  );
}
