export function arrangeTimeline(items) {
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
