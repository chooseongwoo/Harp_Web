export const getDayMinuteCounter = (date?: Date | string): number | string => {
  if (!date) {
    return '';
  }

  const today = new Date();
  const postingDate = new Date(date);
  const dayDiff = Math.floor(
    (today.getTime() - postingDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const hourDiff = Math.floor(
    (today.getTime() - postingDate.getTime()) / (1000 * 60 * 60)
  );
  const minutesDiff = Math.floor(
    (today.getTime() - postingDate.getTime()) / (1000 * 60)
  );

  if (dayDiff === 0 && hourDiff === 0) {
    const minutes = Math.ceil(minutesDiff);
    return minutes == 0 ? 1 : minutes + '분 전';
  }

  if (dayDiff === 0 && hourDiff <= 24) {
    const hour = Math.ceil(hourDiff);
    return hour + '시간 전';
  }

  if (dayDiff >= 7 && dayDiff < 30) {
    return Math.floor(dayDiff / 7) + '주일 전';
  }

  if (dayDiff >= 30 && dayDiff < 365) {
    const months = Math.floor(dayDiff / 30);
    return months + '달 전';
  }

  if (dayDiff >= 365) {
    const years = Math.floor(dayDiff / 365);
    return years + '년 전';
  }

  return dayDiff + '일 전';
};
