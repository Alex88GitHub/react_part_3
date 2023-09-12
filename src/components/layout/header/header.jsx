import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Button from "/src/components/ui/button/button";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Button>Купить</Button>
    </header>
  );
}

export default Header;
