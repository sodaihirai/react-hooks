import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import Booking from "./Booking";
import UserContext from '../Users/UserContext'

const BookingsDetails = ({ booking, bookable }) => {
  const user = useContext(UserContext)

  const isBooker = user && booking && user.id === booking.bookerId

  return (
    <div className="booking-details placeholder">
      <h2>Bookings Details
      {
        isBooker && (
          <span className="controls">
            <button className="btn">
              <FaEdit />
            </button>
          </span>
        )
      }
      </h2>
      {booking ? (
        <Booking booking={booking} bookable={bookable} />
      ) : (
        <div className="booking-details-fields">
          <p>Select a booking or a booking slot.</p>
        </div>
      )}
    </div>
  );
};

export default BookingsDetails;
