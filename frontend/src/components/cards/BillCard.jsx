import React from 'react';

function BillCard(props) {
  return (
    <div className="bill-card">
      <h2>{props.name}</h2>
      <p>{props.date_due}</p>
      <p>{props.amount_due}</p>
    </div>
  )
};

export default BillCard;