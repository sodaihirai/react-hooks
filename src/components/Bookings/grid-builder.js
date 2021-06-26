import { sessions } from "../../static.json";
import { addDays, shortIso } from "../../utils/date-wrangler";

export const getGrid = (bookable, startDate) => {
  if (!bookable) return;
  const bookableSessions = bookable.sessions.map((session, i) => sessions[i]);

  const bookableDates = bookable.days.map((d) =>
    shortIso(addDays(startDate, d))
  );

  const grid = bookableSessions.reduce((o, session) => {
    const dates = bookableDates.reduce((o, date) => {
      return {
        ...o,
        [date]: {
          session,
          date,
          bookableId: bookable.id,
          title: "",
        },
      };
    }, {});
    return {
      ...o,
      [session]: dates,
    };
  }, {});
  return { grid, sessions: bookableSessions, dates: bookableDates }
};

export const transformBookings = (bookings) => {
  return bookings.reduce((o, booking) => {
    const { session, date } = booking
    if(!o[session]) {
      o[session] = {}
    }
    o[session][date] = booking
    return o
  }, {})
}
