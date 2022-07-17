import { Duration } from "luxon";

export const calculateCutoff = (wr: Duration): Duration => {

  let cutoff = wr.mapUnits(x => x * 1.1);

  if (wr.milliseconds) {
    cutoff = cutoff.shiftTo("hours", "minutes", "seconds", "milliseconds");
  } else {
    cutoff=cutoff.shiftTo("hours", "minutes", "seconds");
  }

  return cutoff.normalize();
}

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
