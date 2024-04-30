import { FC } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { formatTitleToLowerCase } from "@/app/utils/formatter";
import ButtonArrow from "../../Common/ButtonArrow";

type blogPost = {
  title: string;
  tag: string;
  image: string;
  description: string;
  url: string;
  alt?: string;
};

const BlogShowCaseCard: FC<blogPost> = ({
  title,
  tag,
  image,
  description,
  url,
  alt,
}) => {
  return (
    <div className={styles.blog_tile}>
      <a href={url} referrerPolicy="no-referrer" target="_blank">
        <span>
          <div className={styles.blog_tile_image}>
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0",
                margin: "0",
                padding: "0",
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
              }}
            >
              <Image
                src={image}
                alt={alt || formatTitleToLowerCase(title)}
                width={323}
                height={323}
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  background: "none",
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  position: "absolute",
                  inset: "0px",
                }}
              />
            </span>
            <div className={styles.blog_tile_button}>
              <ButtonArrow
                href={url}
                referrerPolicy="no-referrer"
                target="_blank"
              />
            </div>
            <div
              className={`${
                styles.blog_tile_category
              } pill category-${formatTitleToLowerCase(tag)}`}
            >
              {tag}
            </div>
          </div>
          <div className={styles.blog_tile_details}>
            <h4>{title}</h4>
            <div className={styles.blog_tile_description}>{description}</div>
          </div>
        </span>
      </a>
    </div>
  );
};

export default BlogShowCaseCard;
