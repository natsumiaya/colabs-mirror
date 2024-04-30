import { FC } from "react";
import styles from "./index.module.css";
import ButtonArrow from "../ButtonArrow";
import ClientJarallax from "../ParallaxComponent/client_index";

type subscribeProps = {
  image: string;
};

const SubscribeSection: FC<subscribeProps> = ({ image }) => {
  return (
    <section className={styles.subscribe_section}>
      <div className={`container ${styles.subscribe_container}`}>
        <div className={styles.subscribe_image}>
          <ClientJarallax image={image}></ClientJarallax>
        </div>
        <div className={styles.subscribe_main}>
          <h3>
            An ecosystem to be part of. <br /> Stay in the loop.
          </h3>
          <div className={styles.subscribe_form}>
            <form>
              <input type="email" placeholder="Your Email Address" />
              <ButtonArrow
                spanText="Subscribe"
                title="Subscribe"
                className={styles.subscribe_button}
              ></ButtonArrow>
            </form>
          </div>
          <div className={styles.subscribe_copy}>
            <p>Subscribe for updates, news, events, and community resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
