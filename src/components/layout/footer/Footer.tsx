import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  {t.footer.location}
                </Link>
                <Link href="tel:+5583986817291">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  (83) 98681-7291
                </Link>
                <Link href="mailto:contato@mehubdigital.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  contato@mehubdigital.com
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="contact-us" className="btn btn--secondary">
                  {t.footer.cta}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>{t.footer.navigation}</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">{t.nav.about}</Link>
                  </li>
                  <li>
                    <Link href="our-services">{t.nav.services}</Link>
                  </li>
                  <li>
                    <Link href="our-projects">{t.nav.projects}</Link>
                  </li>
                  <li>
                    <Link href="faq">{t.nav.faq}</Link>
                  </li>
                  <li>
                    <Link href="contact-us">{t.nav.contact}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>{t.footer.newsletterTitle}</h5>
              </div>
              <div className="footer__single-content">
                <p>{t.footer.newsletterDesc}</p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder={t.footer.emailPlaceholder}
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> ME Hubdigital. {t.footer.rights}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
