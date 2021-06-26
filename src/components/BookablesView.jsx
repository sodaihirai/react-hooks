import React, { useState } from "react";
import BookablesList from "./BookablesList";
import BookableDetail from "./BookableDetail";

const BookablesView = () => {
  const [bookable, setBookable] = useState(0)
  //const [state, dispatch] = useReducer(reducer, initialState);
  //const { bookables, group, bookableIndex } = state;

  return (
    <React.Fragment>
      <BookablesList bookable={bookable} setBookable={setBookable}/>
      <BookableDetail bookable={bookable} />
    </React.Fragment>
  );
};

export default BookablesView;
