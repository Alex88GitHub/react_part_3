import React from "react";
import Logo from "/src/components/ui/logo/logo";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <a href="/" className="footer__copyright-link">
        Создано 2021
      </a>
    </footer>
  );
}

export default Footer;
