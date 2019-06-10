import React from 'react';

function BillCard(props) {
  return (
    <div className="bill-card">
      <h2>{props.name}</h2>
      <p>{props.due_date}</p>
      <p>{amount.due}</p>
    </div>
  )
};

export default BillCard;