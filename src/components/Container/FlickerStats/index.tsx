"use client";
import { FC, useEffect } from "react";
import Flickity from "flickity";
import StatisticCards from "@/components/Container/StatisticCards";

type statsProps = {
  data: any[]
}

const FlickerStats: FC<statsProps> = ({data}) => {
  useEffect(() => {
    const statsComp = document.querySelector(".statistic") as HTMLElement;
    const childStats = statsComp.querySelector(".statistic > div") as HTMLElement; 
    new Flickity(childStats, {
      autoPlay: 3000,
      prevNextButtons: false,
      draggable: false,
      wrapAround: true,
      cellAlign: 'center'
    });
    require("./flick-statistic.css");
  }, []);

  return (
    <div className="statistic">
      <div>
        {data.map((stats, index) => (
          <StatisticCards
            key={index}
            amount={stats.amount}
            description={stats.description}
            className="flickity-cell"
          />
        ))}
      </div>
    </div>
  );
}

export default FlickerStats;