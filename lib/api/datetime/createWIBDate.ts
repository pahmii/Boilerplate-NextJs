import { isValid } from "date-fns";
import { fromZonedTime } from "date-fns-tz";

export const createWIBDate = (dateString: string) =>
  isValid(fromZonedTime(dateString, "Asia/Jakarta"))
    ? fromZonedTime(dateString, "Asia/Jakarta")
    : undefined;
