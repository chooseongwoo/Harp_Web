import moment from 'moment';

export const getDayMinuteCounter = (date?: Date | string): number | string => {
  if (!date) {
    return '';
  }

  const today = moment();
  const postingDate = moment(date, 'YYYY. MM. DD. A hh:mm');
  const dayDiff = today.diff(postingDate, 'days');
  const hourDiff = today.diff(postingDate, 'hours');
  const minutesDiff = today.diff(postingDate, 'minutes');

  if (dayDiff === 0 && hourDiff === 0) {
    const minutes = Math.ceil(minutesDiff);
    return minutes + '분 전';
  }

  if (dayDiff === 0 && hourDiff <= 24) {
    const hour = Math.ceil(hourDiff);
    return hour + '시간 전';
  }

  if (dayDiff >= 7 && dayDiff < 30) {
    return Math.floor(dayDiff / 7) + '주일 전';
  }

  if (dayDiff >= 30 && dayDiff < 365) {
    return '한달 전';
  }

  if (dayDiff >= 365) {
    return '1년 전';
  }

  return dayDiff + '일 전';
};
