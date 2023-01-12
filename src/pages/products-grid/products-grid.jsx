import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card';
import { products2 } from '../../assets/data';

const ProductsGrid = () => {
  const { parameters } = useParams();

  const categoryItems = parameters
    .split('&')
    .map((param) => products2.filter((item) => item.category === param))
    .flat();

  return (
    <section>
      <div className='container'>
        <div
          className='grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-3 
          desktop:grid-cols-4'>
          {categoryItems.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
