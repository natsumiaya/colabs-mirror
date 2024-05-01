import { FC } from "react";
import Image from "next/image";
import styles from "./index.module.css";

type circleImageCardProps = {
  image: string;
  alt: string;
  className?: string;
};

const CircleImageCard: FC<circleImageCardProps> = async ({ image, className, alt }) => {
  return (
    <div className={`${styles.circle_image_card} ${className}`}>
      <span
        style={{
          boxSizing: "border-box",
          display: "block",
          overflow: "hidden",
          width: "initial",
          height: "initial",
          background: "none",
          opacity: "1",
          border: "0px",
          margin: "0px",
          padding: "0px",
          position: "absolute",
          inset: "0px",
        }}
      >
        <Image
          alt={alt}
          src={`/image/${image}`}
          width={150}
          height={150}
          style={{
            position: "absolute",
            inset: "0px",
            boxSizing: "border-box",
            padding: "0px",
            border: "none",
            margin: "auto",
            display: "block",
            width: "0px",
            height: "0px",
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
          }}
        />
      </span>
    </div>
  );
};

export default CircleImageCard;