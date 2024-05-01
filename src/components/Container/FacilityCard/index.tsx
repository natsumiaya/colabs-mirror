import { FC } from "react";
import styles from "./index.module.css";
import { SvgWrapper } from "@/components/Common/IconWrapper";

type facilityCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FacilityCard: FC<facilityCardProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.facility_card}>
      <h4>{title}</h4>
      <div className={styles.facility_desc}>{description}</div>
      <div className={styles.facility_image}>
        <SvgWrapper name={icon} />
      </div>
    </div>
  );
};

export default FacilityCard;
