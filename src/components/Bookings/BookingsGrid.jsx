import React, { useState, useEffect, useMemo, Fragment } from "react";
import { getBookings } from "../../utils/api";
import { getGrid, transformBookings } from "./grid-builder";
import Spinner from "../UI/Spinner";

const BookingsGrid = ({ week, bookable, booking, setBooking }) => {
  const [bookings, setBookings] = useState();
  const [error, setError] = useState();
  const { grid, sessions, dates } = useMemo(
    () => (bookable ? getGrid(bookable, week.start) : {}),
    [bookable, week]
  );

  useEffect(() => {
    if (!bookable) return;

    let doUpdate = true;

    setBookings(null);
    setError(false);
    setBooking(null);

    getBookings(bookable.id, week.start, week.end)
      .then((resp) => {
        if (doUpdate) {
          console.log(resp)
          setBookings(transformBookings(resp));
        }
      })
      .catch(setError);

    return () => (doUpdate = false);
  }, [bookable, week, setBooking]);

  const cell = (session, date) => {
    const cellData = bookings?.[session]?.[date] || grid[session][date];
    const isSelected = booking?.session === session && booking.date === date;

    return (
      <td
        key={date}
        className={isSelected ? "selected" : null}
        onClick={bookings ? () => setBooking(cellData) : null}
      >
        {cellData.title}
      </td>
    );
  };

  if (!grid) {
    return <p>Loading ...</p>;
  }

  return (
    <Fragment>
      {error && <p>{`There was a problem ${error}`}</p>}
      <table className={bookings ? "bookingsGrid active" : "bookingsGrid"}>
        <thead>
          <tr>
            <th>
              <span className="status">
                { bookings ? null : <Spinner /> }
              </span>
            </th>
            {dates.map((date) => (
              <th key={date}>{new Date(date).toDateString()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr>
              <td>{session}</td>
              {dates.map((date) => cell(session, date))}
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default BookingsGrid;
