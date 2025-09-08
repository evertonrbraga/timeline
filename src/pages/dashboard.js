import React, { useState, useEffect } from "react";
import timelineItems from "../data/timelineItems";
import { TimeBlock } from "../components/TimeBlock";
import {
  arrangeTimelineBlocks,
  getTimelineMonthRange,
  createDaysArrayForMonths,
} from "../utils/utils";

export const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const busyBlocksArranged = arrangeTimelineBlocks(timelineItems);
    console.log("busyBlocksArranged:", busyBlocksArranged);
  }, []);

  useEffect(() => {
    const monthsInterval = getTimelineMonthRange(timelineItems);
    const daysOfTheMonths = createDaysArrayForMonths(monthsInterval);
    console.log("monthsInterval:", monthsInterval);
    console.log("daysOfTheMonths:", daysOfTheMonths);
  }, []);

  return (
    <div>
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <TimeBlock />
    </div>
  );
};
