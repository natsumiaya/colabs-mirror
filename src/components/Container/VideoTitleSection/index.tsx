import { FC } from "react";
import LeftCorner from "@/assets/icons/left-corner.svg";
import RightCorner from "@/assets/icons/right-corner.svg";
import ButtonArrow from "@/components/Common/ButtonArrow";
import styles from "./index.module.css";

const VideoTitle: FC<{ video: string; title: string }> = ({ video, title }) => {
  return (
    <div className={styles.main_content}>
      <video playsInline autoPlay muted loop src={video}></video>
      <div className={`video_title ${styles.main_title}`}>
        <LeftCorner />
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <div>
          <ButtonArrow type="light" />
        </div>
        <RightCorner />
      </div>
    </div>
  );
};

export default VideoTitle;
