export const isValidDate = (dateString: string): boolean => {
  if (dateString.length !== 10) return false;
  const [year, month, day] = dateString.split('/').map(Number);
  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  return (
    inputDate.getFullYear() === year &&
    inputDate.getMonth() + 1 === month &&
    inputDate.getDate() === day &&
    inputDate <= currentDate
  );
};
