import NavbarMenu from "./Navbar";
import { HeaderBox } from "./header.styled";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

export default function Header() {
  return (
    <>
      <HeaderBox>
        <LeftNavbar />
        <NavbarMenu />
        <RightNavbar />
      </HeaderBox>
    </>
  );
}
