"use client";
import { FC } from "react";
import ButtonArrow from "../ButtonArrow";
import styles from "./index.module.css";
import ClientJarallax from "../ParallaxComponent/client_index";

type LinkCardProps = {
  url: string;
  title: string;
  image: string;
};

const LinkCard: FC<LinkCardProps> = ({ url, title, image }) => {
  return (
    <div className={styles.link_card}>
      <div className={styles.link_main}>
        <a href={url}>
          <span>
            <h5>{title}</h5>
          </span>
        </a>
        <div className={styles.link_button}>
          <ButtonArrow />
        </div>
      </div>

      <ClientJarallax image="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/dragonfly-1.jpg"></ClientJarallax>
    </div>
  );
};

export default LinkCard;
