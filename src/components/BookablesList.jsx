import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getData } from "../utils/api";

const BookablesList = ({ bookable, setBookable }) => {
  const [bookables, setBookables] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const group = bookable?.group;

  const bookablesInGroup = bookables.filter(
    (bookable) => bookable.group === group
  );

  const groups = [...new Set(bookables.map((bookable) => bookable.group))];

  const nextButtonRef = useRef();

  const changeGroup = (e) => {
    const bookablesInSelectedGroup = bookables.filter(
      (b) => b.group === e.target.value
    );
    setBookable(bookablesInSelectedGroup[0]);
  };

  const changeBookable = (selectedBookable) => {
    setBookable(selectedBookable);
    nextButtonRef.current.focus();
  };

  const nextBookable = () => {
    const i = bookablesInGroup.indexOf(bookable);
    const nextIndex = (i + 1) % bookablesInGroup.length;
    const nextBookable = bookablesInGroup[nextIndex];
    setBookable(nextBookable);
  };

  useEffect(() => {
    getData("http://localhost:3001/bookables")
      .then((bookables) => {
        setBookable(bookables[0]);
        setBookables(bookables);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [setBookable]);

  if (error) {
    return <p>{error.meeesage}</p>;
  }

  if (isLoading) {
    return <div>wati</div>;
  }

  return (
    <div>
      <select value={group} onChange={changeGroup}>
        {groups.map((group) => (
          <option value={group} key={group}>
            {group}
          </option>
        ))}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b, i) => (
          <li key={b.id} className={b.id === bookable.id ? "selected" : null}>
            <button className="btn" onClick={() => changeBookable(b)}>
              {b.title}
            </button>
          </li>
        ))}
      </ul>
      <button
        id="nextButton"
        className="btn"
        onClick={nextBookable}
        ref={nextButtonRef}
        autoFocus
      >
        <FaArrowRight />
        <span>Next</span>
      </button>
    </div>
  );
};

export default BookablesList;
