import { DateTime } from "luxon";

const dateFormatter = async (startMonth: string, endMonth: string) => {
  let splitedStartMonth = startMonth.split("/");
  let splitedEndMonth = endMonth.split("/");

  const startYearToNumber = Number(splitedStartMonth[0])
  const startMonthToNumber = Number(splitedStartMonth[1])
  const endYearToNumber = Number(splitedEndMonth[0])
  const endMonthToNumber = Number(splitedEndMonth[1])

  const startDate = DateTime.utc(startYearToNumber, startMonthToNumber, 1, 0, 0, 0).toISO();
  const endDate = DateTime.utc(endYearToNumber, endMonthToNumber, 28 || 29 || 30 || 31, 23, 59, 59).toISO();

  return {
    startDate,
    endDate
  };
};

export default dateFormatter;