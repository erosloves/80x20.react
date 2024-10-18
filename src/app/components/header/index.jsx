"use client";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [isNavActive, setNavActive] = useState(false);
  const logoHoverHandler = (key) => {
    switch (key) {
      case 0:
        setNavActive(false);
        break;
      case 1:
        setNavActive(true);
      default:
        break;
    }
  };
  return (
    <header className="header">
      <div className="header_container">
        <a href="/" className="logo" onMouseOver={() => logoHoverHandler(1)}>
          80/20
        </a>
        {isNavActive && (
          <nav className="nav_wrapper" onMouseLeave={() => logoHoverHandler(0)}>
            <Link href="/about-us" className="nav_item">
              О нас
            </Link>
            <Link href="/contacts" className="nav_item">
              Контакты
            </Link>
            <Link href="/services" className="nav_item">
              Услуги
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
