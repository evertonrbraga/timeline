export function arrangeTimelineBlocks(items) {
  const withDates = items.map((item) => ({
    ...item,
    startDate: new Date(item.start).getTime(),
    endDate: new Date(item.end).getTime(),
  }));

  withDates.sort((a, b) => a.startDate - b.startDate || a.endDate - b.endDate);

  const lines = [];

  withDates.forEach((item) => {
    let placed = false;

    for (const line of lines) {
      const lastInLine = line[line.length - 1];
      if (lastInLine.endDate < item.startDate) {
        line.push(item);
        placed = true;
        break;
      }
    }

    if (!placed) {
      lines.push([item]);
    }
  });

  return lines;
}

export function createDaysArrayForMonths(monthsArray) {
  function getDaysInMonth(year, month) {
    const y = parseInt(year, 10);
    const m = parseInt(month, 10);

    return new Date(y, m, 0).getDate();
  }

  return monthsArray.map(({ month, year }) => getDaysInMonth(year, month));
}

export function getTimelineMonthRange(items) {
  function getYearMonth(dateString) {
    const [year, month] = dateString.split("-");
    return { year: parseInt(year), month: parseInt(month) };
  }

  function compareYearMonth(a, b) {
    if (a.year !== b.year) return a.year - b.year;
    return a.month - b.month;
  }

  let minYearMonth = null;
  let maxYearMonth = null;

  items.forEach((item) => {
    const startYearMonth = getYearMonth(item.start);
    const endYearMonth = getYearMonth(item.end);

    if (!minYearMonth || compareYearMonth(startYearMonth, minYearMonth) < 0) {
      minYearMonth = startYearMonth;
    }

    if (!maxYearMonth || compareYearMonth(endYearMonth, maxYearMonth) > 0) {
      maxYearMonth = endYearMonth;
    }
  });

  const monthsArray = [];
  let currentYear = minYearMonth.year;
  let currentMonth = minYearMonth.month;

  while (
    currentYear < maxYearMonth.year ||
    (currentYear === maxYearMonth.year && currentMonth <= maxYearMonth.month)
  ) {
    const monthStr = String(currentMonth).padStart(2, "0");
    const yearStr = String(currentYear);

    monthsArray.push({
      month: monthStr,
      year: yearStr,
    });

    currentMonth++;
    if (currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    }
  }

  return monthsArray;
}
