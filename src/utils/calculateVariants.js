import moment from "moment";

export const calculateVariants = (slots) => {
  return slots?.slots?.map((time) => {
    const startTime = moment(time?.start_time);
    const endTime = moment(time?.end_time);

    const durationInHours = endTime.diff(startTime, "minutes");

    return durationInHours;
  });
};