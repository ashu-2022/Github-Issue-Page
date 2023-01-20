const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const findTimeAgo = (createdAt) => {
  let hour, day, week, month;
  createdAt = new Date(createdAt);
  let currentTime = new Date();
  let timeDiff = (currentTime - createdAt) / 1000; // converted into sec
  if (timeDiff < 86400) {
    hour = Math.floor(timeDiff / 3600); // 60 * 60
      if (hour <= 1) return "1 hour ago";
    return `${hour} hours ago`;
  } else {
    day = Math.floor(timeDiff / 86400); // 60 * 60 * 24
    if (day <= 7) {
        if (day <= 1) return "1 day ago";
      return `${day} days ago`;
    } else {
      week = Math.floor(timeDiff / 604800); // 60 * 60 * 24 * 30
      if (week <= 1) return "last week";
      else if (week <= 4) return `${week} weeks ago`;
      else {
        month = Math.floor(timeDiff / 2628000); // 60 * 60 * 24 * 30 * 365/7
        if (month <= 1) return "last month";
        const createdAtDayOfMonth = createdAt.getDate();
        const createdAtMonth = createdAt.getMonth();
        const createdAtYear = createdAt.getFullYear();
        const prevTimeStr = `on ${monthNames[createdAtMonth]} ${createdAtDayOfMonth}, ${createdAtYear}`;
        return prevTimeStr;
      }
    }
  }
};
