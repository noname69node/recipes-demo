import React from "react";
import Nav from "../Nav/Nav";

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
