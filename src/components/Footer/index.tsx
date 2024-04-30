import { FC } from "react";
import styles from "./index.module.css";

import ColabsIcon from "@/assets/icons/colabs-icon.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_inner}>
          <div className={styles.footer_acknowledgment}>
            <h5>
              <p>
                Co-Labs Melbourne respectfully acknowledges the Traditional
                Custodians of the land on which we operate our business – the
                Boon Wurrung and Wurundjeri peoples of the Kulin Nation.
              </p>
            </h5>
          </div>
          <div className={styles.footer_main}>
            <div className={styles.location}>
              <div>
                <div>CoLabs Coworking 1/306 Albert St, Brunswick </div>
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </div>
              <div>
                <div>17/306 Albert St, Brunswick</div>
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </div>
              <div>
                <div>20/306 Albert St, Brunswick </div>
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </div>
              <div>
                <div>2 Acacia Place, Notting Hill </div>
                <a href="tel:(03) 9111 2399">(03) 9111 2399</a>
              </div>
            </div>
            <nav className={styles.menu} data-lenis-prevent="true">
              <ul>
                <li>
                  <div className="">
                    <a className="" href="/services">
                      <span className="  ">Services</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="">
                    <a className="" href="/privacy-policy">
                      <span className="  ">Privacy Policy</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="">
                    <a className="" href="/our-principles">
                      <span className="  ">Our Principles</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="">
                    <a className="" href="/terms-and-conditions">
                      <span className="  ">Terms and Conditions</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="">
                    <a className="" href="/about">
                      <span className="  ">About</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="">
                    <a className="" href="/community">
                      <span className="  ">Community</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="">
                    <a className="" href="/contact">
                      <span className="  ">Contact</span>
                    </a>
                  </div>
                </li>
                <li>
                  <span>© 2024 CoLabs</span>
                </li>
              </ul>
            </nav>
            <div className={styles.footer_bottom}>
              <a className="active" href="/">
                <span className="  active">
                  <ColabsIcon />
                </span>
              </a>
              <ul className={styles.socials}>
                <li className="social">
                  <a
                    href="https://www.instagram.com/colabs.aus/"
                    target="_blank"
                    aria-label="instagram"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li className="social">
                  <a
                    href="https://www.facebook.com/colabs.australia"
                    target="_blank"
                    aria-label="facebook"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li className="social">
                  <a
                    href="https://www.linkedin.com/company/colabsaustralia/"
                    target="_blank"
                    aria-label="linkedin"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li className="social">
                  <a
                    href="https://twitter.com/CoLabsaus"
                    target="_blank"
                    aria-label="twitter"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;