import React from 'react';
import ProductCard from '../product-card';

const ProductsGrid = ({ products }) => {
  return (
    <div className='container'>
      <div
        className='grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-3 
				desktop:grid-cols-4'>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
