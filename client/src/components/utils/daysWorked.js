import moment from "moment";
const daysWorked = (dateFrom1, dateTo1, dateFrom2, dateTo2) => {
  const startDate1 = format(dateFrom1);
  const endDate1 = dateTo1 !== "NULL" ? format(dateTo1) : new Date();
  const startDate2 = format(dateFrom2);
  const endDate2 = dateTo2 !== "NULL" ? format(dateTo2) : new Date();

  if (endDate1 < startDate2 || endDate2 < startDate1) {
    return 0;
  }
  const startDate = startDate1 > startDate2 ? startDate1 : startDate2;
  const startDateFormated = format(startDate);
  const endDate = endDate1 < endDate2 ? endDate1 : endDate2;
  const endDateFormated = format(endDate);
  const duration = endDateFormated - startDateFormated;
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  if (days < 0) {
    return 0;
  }
  return days + 1;
};

function format(dateString1) {
  const formats = [
    "YYYY-MM-DD",
    "DD-MM-YYYY",
    "YYYY/MM/DD",
    "DD/MM/YYYY",
    "DD.MM.YYYY",
    "YYYY.MM.DD",
  ];

  let date1;
  for (let format of formats) {
    date1 = moment(dateString1, format, true);
    if (date1.isValid()) {
      break;
    }
  }
  return date1;
}
export default daysWorked;
