import { Duration } from "luxon";

export const calculateCutoff = (wr: Duration): Duration =>
  wr.mapUnits(x => x * 1.1).normalize();

export const formatDuration = (duration: Duration): string => {

  let format: string = "";

  if (duration.hours > 0) {
    format += "h:m";
  }

  format += "m:ss";

  if (duration.milliseconds > 0) {
    format += ".SSS";
  }

  return duration.toFormat(format);
};
