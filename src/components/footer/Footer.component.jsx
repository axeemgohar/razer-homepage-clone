import { useState, useEffect } from "react";
import { ReactComponent as FacebookLogo } from "../../assets/social-icons/SM0001-facebook-grey.svg";
import { ReactComponent as InstagramLogo } from "../../assets/social-icons/SM0003-instagram-grey.svg";
import { ReactComponent as TwitterLogo } from "../../assets/social-icons/SM0005-twitter-grey.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/social-icons/SM0008-youtube-grey.svg";
import { ReactComponent as TiktokLogo } from "../../assets/social-icons/SM0014-tiktok-grey.svg";
import { ReactComponent as TwitchLogo } from "../../assets/social-icons/SM0009-twitch-grey.svg";
import { ReactComponent as DiscordLogo } from "../../assets/social-icons/SM0015-discord-grey.svg";

import "./footer.styles.css";

const shopLinks = [
  "RazerStores",
  "RazerCafe",
  "Store Locator",
  "Purchase Programs",
  "Education",
  "Exclusives",
  "RazerStore Rewards",
  "Newsletter",
];

const exploreLinks = [
  "Technology",
  "Chroma RGB",
  "Concepts",
  "Esports",
  "Collabs",
];
const supportLinks = [
  "Get Help",
  "Registration & Warranty",
  "RazerStore Support",
  "RazerCare",
  "Manage Razer ID",
  "Support Videos",
  "Accessibility Statement",
];

const companyLinks = [
  "About Us",
  "Careers",
  "Newsroom",
  "zVentures",
  "Contact Us",
];

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState({
    accord1: false,
    accord2: false,
    accord3: false,
    accord4: false,
    accord5: false,
    accord6: false,
    accord7: false,
    accord8: false,
    accord9: false,
    accord10: false,
    accord11: false,
  });

  const openAccordionHandler = (index) => {
    setOpen({ ...open, [`accord${index}`]: !open[`accord${index}`] });
  };

  useEffect(() => {
    const getWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [windowWidth, open]);

  return (
    <footer>
      <div className="footer-container">
        <section className="footer-nav-container">
          {windowWidth > 770 ? (
            <div className="footer-link-container">
              <nav className="footer-nav-links">
                <div className="footer-nav-column">
                  <div className="footer-nav-items">
                    <h4>Shop</h4>

                    <div>
                      {shopLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="footer-nav-column">
                  <div className="footer-nav-items">
                    <h4>Explore</h4>
                    <div>
                      {exploreLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="footer-nav-column">
                  <div className="footer-nav-items">
                    <h4>Support</h4>
                    <div>
                      {supportLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="footer-nav-column">
                  <div className="footer-nav-items">
                    <h4>Company</h4>
                    <div>
                      {companyLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="footer-nav-column">
                  <div className="footer-nav-column">
                    <div className="footer-nav-items">
                      <h4>Follow Us</h4>

                      <div>
                        <FacebookLogo className="social-icon" />
                        <InstagramLogo className="social-icon" />
                        <TwitterLogo className="social-icon" />
                        <YoutubeLogo className="social-icon" />
                        <TiktokLogo className="social-icon" />
                        <TwitchLogo className="social-icon" />
                        <DiscordLogo className="social-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="footer-links-right">
                <p>FOR GAMERS. BY GAMERS.™</p>
              </div>
            </div>
          ) : (
            <nav className="footer-nav-links">
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(1)}>Shop</button>
                  {open.accord1 && (
                    <div>
                      {shopLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(4)}>
                    Explore
                  </button>
                  {open.accord4 && (
                    <div>
                      {exploreLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(5)}>
                    Support
                  </button>
                  {open.accord5 && (
                    <div>
                      {supportLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button
                    onClick={() => {
                      openAccordionHandler(7);
                    }}
                  >
                    Company
                  </button>
                  {open.accord7 && (
                    <div>
                      {companyLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </nav>
          )}
        </section>
        <section className="copyright">
          <div className="social-links-mobile">
            <div className="footer-links-right">
              <p>FOR GAMERS. BY GAMERS.™</p>
            </div>
            <div>
              <FacebookLogo className="social-icon" />
              <InstagramLogo className="social-icon" />
              <TwitterLogo className="social-icon" />
              <YoutubeLogo className="social-icon" />
              <TiktokLogo className="social-icon" />
              <TwitchLogo className="social-icon" />
              <DiscordLogo className="social-icon" />
            </div>
          </div>
          <div className="select-country">
            <p>United States</p>
          </div>
          <div className="copyright-container">
            <p>Copyright &copy; 2023 Razer Inc. All rights reserved.</p>
            <div className="legal-links">
              <a href="/">Site Map</a>
              <a href="/">Legal Terms</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Cookie Settings</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
