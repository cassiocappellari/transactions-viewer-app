import { DateTime } from "luxon";

const dateFormatter = async (startMonth: string, endMonth: string) => {
  let splitedStartMonth = startMonth.split("/");
  let splitedEndMonth = endMonth.split("/");

  const startDate = {
    startYear: Number(splitedStartMonth[0]),
    startMonth: Number(splitedStartMonth[1]),
    startDay: 1,
    startHour: 0,
    startMinute: 0,
    startSecond: 0
  };

  const endDate = {
    endYear: Number(splitedEndMonth[0]),
    endMonth: Number(splitedEndMonth[1]),
    endDay: 28 || 29 || 30 || 31,
    endHour: 23,
    endMinute: 59,
    endSecond: 59
  };

  const formattedStartDate = DateTime.utc(
    startDate.startYear, 
    startDate.startMonth, 
    startDate.startDay, 
    startDate.startHour, 
    startDate.startMinute, 
    startDate.startSecond
  ).toISO();

  const formattedEndDate = DateTime.utc(
    endDate.endYear, 
    endDate.endMonth, 
    endDate.endDay, 
    endDate.endHour, 
    endDate.endMinute, 
    endDate.endSecond
  ).toISO();

  return {
    formattedStartDate,
    formattedEndDate
  };
};

export default dateFormatter;