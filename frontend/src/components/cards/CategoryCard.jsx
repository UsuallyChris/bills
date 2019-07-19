import React from 'react';

// Component Imports
import CardHeader from './CardHeader';

function CategoryCard() {
  return (
    <div className="card-100 shadow">
      <CardHeader heading="Spending By Category:" />
      <h1>Spending By Category</h1>
    </div>
  )
}

export default CategoryCard;