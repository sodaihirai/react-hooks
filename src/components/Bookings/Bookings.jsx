import React, { useState, useEffect, useReducer } from "react";
import { getWeek } from "../../utils/date-wrangler";
import { getBookings } from "../../utils/api";
import WeekPicker from "./WeekPicker";
import BookingsGrid from "./BookingsGrid";
import BookingsDetails from "./BookingsDetails";
import weekReducer from "./weekReducer";

const Bookings = ({ bookable }) => {
  const [week, dispatch] = useReducer(weekReducer, new Date(), getWeek);
  const [booking, setBooking] = useState(null);

  return (
    <div className="bookings">
      <div>
        <WeekPicker dispatch={dispatch} />
        <BookingsGrid week={week} bookable={bookable} booking={booking} setBooking={setBooking} />
        <BookingsDetails />
      </div>
    </div>
  );
};

export default Bookings;
