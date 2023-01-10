import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/card';
import { products2 } from '../../assets/data';

const Category = () => {
  const { category } = useParams();

  const categoryItems = products2.filter((item) => item.category === category);
  console.log(categoryItems);

  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-3'>
          {categoryItems.map((item) => (
            <Card
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
