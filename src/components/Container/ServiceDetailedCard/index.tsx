import { CSSProperties, FC } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import ButtonArrow from "@/components/Common/ButtonArrow";

type serviceDetailedProps = {
  image: string;
  alt: string;
  description: string;
  tagline: string;
  style?: CSSProperties;
  highlightColor: string;
};

const ServiceDetailedCard: FC<serviceDetailedProps> = ({
  image,
  alt,
  description,
  tagline,
  highlightColor,
  ...props
}) => {
  return (
    <article className={styles.service_detailed_container} {...props}>
      <div className={styles.service_detailed_image}>
        <Image src={`/image/${image}`} alt={alt} width={363} height={514} />
    </div>
      <div className={styles.service_detailed_content}>
        <h3>{description}</h3>
        <h3 style={{ color: highlightColor }}>{tagline}</h3>
        <ButtonArrow
          className={styles.service_detailed_button}
          spanText="Learn more"
        />
      </div>
    </article>
  );
};

export default ServiceDetailedCard;
