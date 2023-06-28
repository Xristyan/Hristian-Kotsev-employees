import moment from "moment";
const daysWorked = (dateFrom1, dateTo1, dateFrom2, dateTo2) => {
  const startDate1 = format(dateFrom1);
  const endDate1 = dateTo1 !== "NULL" ? format(dateTo1) : new Date();
  const startDate2 = format(dateFrom2);
  const endDate2 = dateTo2 !== "NULL" ? format(dateTo2) : new Date();

  const duration1 = endDate1 - startDate1;
  const duration2 = endDate2 - startDate2;

  const days1 = Math.floor(duration1 / (1000 * 60 * 60 * 24));
  const days2 = Math.floor(duration2 / (1000 * 60 * 60 * 24));

  return Math.min(days1, days2);
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
