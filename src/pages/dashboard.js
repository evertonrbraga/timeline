import React, { useState, useEffect } from "react";
import timelineItems from "../data/timelineItems";
import { TimeBlock } from "../components/TimeBlock";
import { arrangeTimeline } from "../utils/utils";

export const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arranged = arrangeTimeline(timelineItems);
    setData(arranged);
  }, []);

  console.log(data);

  return (
    <div>
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <TimeBlock />
    </div>
  );
};
