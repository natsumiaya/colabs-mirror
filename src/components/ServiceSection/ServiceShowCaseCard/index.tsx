import { FC } from "react";

import styles from "./index.module.css";

import { formatTitleToLowerCase } from "@/app/utils/formatter";
import CircleImageCard from "../../CircleImageCard";
import ButtonArrow from "@/components/ButtonArrow";

type showCaseCardType = {
  title: string;
  className: string;
  image: string;
  alt?: string
};

const ServiceShowCaseCard: FC<showCaseCardType> = async ({
  title,
  className,
  image,
  alt
}) => {
  return (
    <div className={`${styles.showcase_inside} ${className}`}>
      <a href="">
        <span>
          <h4>{title}</h4>
          <CircleImageCard
            className={styles.showcase_image}
            alt={alt || `${formatTitleToLowerCase(title)}-icon`}
            image={image}
          />
        </span>
      </a>
      <div className={styles.showcase_button}>
        <ButtonArrow
          href={`https://colabs.com.au/services/${formatTitleToLowerCase(
            title
          )}`}
          type="light"
          target="_blank"
          referrerPolicy="no-referrer"
          spanText="Learn More"
          spanTextColor="#fff"
        />
      </div>
    </div>
  );
};

export default ServiceShowCaseCard;
