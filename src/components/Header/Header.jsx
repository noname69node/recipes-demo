import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { PersonFill, Search } from "react-bootstrap-icons";

const Header = () => {
  return (
    <header className="container  mt-2">
      {/* <Logo /> */}
      <Nav />

      {/* <div className="d-flex gap-3 pt-1">
        <Search color="black" size="20"></Search>
        <PersonFill color="black" size="24"></PersonFill>
      </div> */}
    </header>
  );
};

export default Header;
