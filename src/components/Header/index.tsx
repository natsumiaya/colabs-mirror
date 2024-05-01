"use client";
import { FC, useState } from "react";
import styles from "./index.module.css";
import { menuItem, socialItem } from "./header_data";
import { SvgWrapper } from "@/components/Common/IconWrapper";

import Corner from "@/assets/icons/right-corner.svg";
import ColabsIcon from "@/assets/icons/colabs-icon-full.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const pathname = usePathname();

  console.log(pathname);
  return (
    <header
      className={`${styles.header} ${
        isMenuOpened ? styles.header_menu_open : ""
      }`}
    >
      <div className={`container ${styles.header_container}`}>
        <div className={styles.header_logo} data-title="Naarm/Melbourne">
          <Corner />
          <Link href="/">
            <span>
              <ColabsIcon />
            </span>
          </Link>
          <Corner />
        </div>
        <div
          className={styles.header_menu_button}
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          {isMenuOpened ? "Close" : "Menu"}
        </div>
        <nav
          className={`${styles.menu} ${isMenuOpened ? styles.menu_open : ""}`}
        >
          <ul>
            {menuItem.map((item, index) => (
              <li key={`${item.text}-${index}-menu-item`}>
                <div>
                  <Link
                    href={item.url}
                    className={item.url === pathname ? "active" : ""}
                    target={
                      Array.from(item.url)[0] === "/" ? "_self" : "_blank"
                    }
                    referrerPolicy={
                      Array.from(item.url)[0] === "/" ? "origin" : "no-referrer"
                    }
                  >
                    <span>{item.text}</span>
                  </Link>
                </div>
              </li>
            ))}
            {socialItem.map((item, index) => (
              <li
                key={`${item.title}-${index}-social-item`}
                className={styles.header_social}
              >
                <Link
                  key={`${item.title}-${index}`}
                  href={item.url}
                  target="_blank"
                  aria-label={item.title}
                  rel="noreferrer"
                >
                  <SvgWrapper name={item.iconName} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.header_social_mobile}>
          <ul>
            {socialItem.map((item, index) => (
              <li
                key={`${item.title}-${index}-social-mobile`}
                className={styles.header_social}
              >
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  aria-label={item.title}
                  rel="noreferrer"
                >
                  <SvgWrapper name={item.iconName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
