"use client";
import { FC, useEffect } from "react";
import Flickity from "flickity";

import ButtonArrow from "../ButtonArrow";

type communitySummaryCardProps = {
  data: any[];
};

const CommunitySummaryCard: FC<communitySummaryCardProps> = ({ data }) => {
  useEffect(() => {
    const statsComp = document.querySelector(
      ".community_summary"
    ) as HTMLElement;
    const childStats = statsComp.querySelector(
      ".community_summary > div"
    ) as HTMLElement;
    new Flickity(childStats, {
      autoPlay: 3000,
      prevNextButtons: false,
      draggable: false,
      wrapAround: true,
      cellAlign: "center",
    });
    require("./community_summary_card.css");
  }, []);

  return (
    <div className="cs_container">
      <div className="community_summary">
        <div>
          {data.map((summary, index) => (
            <div
              key={index}
              className="summary_card flickity-cell"
              aria-hidden="true"
            >
              <h5 dangerouslySetInnerHTML={{ __html: summary }}></h5>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_button">
        <ButtonArrow
          href="https://colabs.com.au/community"
          target="_blank"
          referrerPolicy="no-referrer"
          title="View Community"
        />
      </div>
    </div>
  );
};

export default CommunitySummaryCard;
