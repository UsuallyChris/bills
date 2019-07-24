import React from 'react';

// Component Imports
import CardHeader from './CardHeader';
import CategoryNumbers from './CategoryNumbers';

function CategoryCard() {
  return (
    <div className="card-100 shadow">
      <CardHeader heading="Spending By Category:" />
      <CategoryNumbers />
      <CategoryNumbers />
    </div>
  )
}

export default CategoryCard;