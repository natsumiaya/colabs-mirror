import { FC, PropsWithChildren } from "react";
import styles from "./index.module.css"

const TileContainer: FC<PropsWithChildren<{ category: string }>> = ({
  children,
  category,
}) => {
  return (
    <div className={`container narrow ${styles.showcase}`}>
      <div className={styles.showcase_intro}>
        <div className="pill">{category}</div>
      </div>
      <div className={styles.showcase_posts}>{children}</div>
    </div>
  );
};

export default TileContainer;
