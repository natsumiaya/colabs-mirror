import { FC, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./index.module.css";

import Arrow from "@/assets/icons/arrow";
import ButtonCorner from "@/assets/icons/button-corner.svg";

type ArrowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  type?: "dark" | "light";
  title?: string;
  spanText?: string;
  className?: string;
  spanTextColor?: string;
};

const ButtonArrow: FC<ArrowButtonProps> = ({
  type = "dark",
  href = "",
  title = "",
  spanText,
  className,
  spanTextColor = "#000",
  ...props
}) => {
  return (
    <button
      className={`${styles.button_container} ${className}`}
      title={title}
      aria-label={title}
    >
      <span>
        {spanText && <span style={{ color: spanTextColor }}>{spanText}</span>}
        <Link
          href={href}
          className={`${type === "light" ? styles.button_light : ""} ${
            styles.arrow_container
          }`}
          title={title}
          {...props}
        >
          <ButtonCorner />
          <span>
            <div className={styles.button_arrow}>
              <Arrow />
            </div>
          </span>
          <ButtonCorner />
        </Link>
      </span>
    </button>
  );
};

export default ButtonArrow;
