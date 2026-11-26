import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";
import Offcanvas from "./Offcanvas";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderThree = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar tertiary--navbar";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logo} alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link href="tel:+5583986817291">
                          <i className="fa-sharp fa-solid fa-phone-volume"></i>
                          (83) 98681-7291
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="mailto:contato@mehubdigital.com">
                          <i className="fa-sharp fa-solid fa-envelope"></i>
                          contato@mehubdigital.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="me-3">
                      <LanguageSwitcher />
                    </div>
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                      {t.nav.menu}
                    </button>
                    <div className="tertiary-cta d-none d-sm-flex">
                      <div className="navbar__mobile-options">
                        <Link href="contact-us" className="btn btn--secondary">
                          {t.nav.talkToUs}
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderThree;
