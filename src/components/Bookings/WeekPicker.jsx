import { useReducer, useRef } from "react";
import { FaChevronLeft, FaCalendarDay, FaChevronRight } from "react-icons/fa";

export default function WeekPicker({ dispatch }) {
  const textBoxRef = useRef();

  const setDateByText = () => {
    dispatch({ type: "SET_DATE", payload: textBoxRef.current.value });
  };

  return (
    <div>
      <p className="date-picker">
        <button className="btn" onClick={() => dispatch({ type: "PREV_WEEK" })}>
          <FaChevronLeft />
          <span>Prev</span>
        </button>

        <button className="btn" onClick={() => dispatch({ type: "TODAY" })}>
          <FaCalendarDay />
          <span>Today</span>
        </button>
        <input
            type="text"
            ref={textBoxRef}
            placeholder="e.g. 2020-09-02"
            defaultValue="2021-06-05"
          />
          <button onClick={setDateByText}>go</button>

        <button className="btn" onClick={() => dispatch({ type: "NEXT_WEEK" })}>
          <span>Next</span>
          <FaChevronRight />
        </button>
      </p>
    </div>
  );
}
