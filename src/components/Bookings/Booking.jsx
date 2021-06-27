import React, { Fragment } from "react";

const Booking = ({ booking, bookable }) => {
  const { title, session, date, notes } = booking;

  return (
    <div className="booking-details-fields">
      <label>Title</label>
      <p>{title}</p>
      <label>Bookable</label>
      <p>{bookable.title}</p>
      <label>Booking Date</label>
      <p>{ (new Date(date)).toDateString()}</p>
      <label>Session</label>
      <p>{session}</p>

      {notes && (
        <Fragment>
          <label>notes</label>
          <p>{notes}</p>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
