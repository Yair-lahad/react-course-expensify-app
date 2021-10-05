// export a stateless functional component
import React from "react";
import {Link } from 'react-router-dom';

// How we want to render the info when using our WrappedComponent
const ExpenseListItem = ({ id,description, amount, createdAt}) => (
  <div>
    <Link to={'/edit/'+id}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);
export default ExpenseListItem;