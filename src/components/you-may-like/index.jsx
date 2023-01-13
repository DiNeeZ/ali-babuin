import React from 'react';
import { Link } from 'react-router-dom';
import { products2 } from '../../assets/data';
import { getMultipleRandom } from '../../utils';

const YouMayLike = () => {
  const mayLike = getMultipleRandom(products2, 6);

  return (
    <section>
      <div className='container'>
        <h2 className='mb-8 text-center text-2xl font-bold'>You May Like</h2>
        <div className='grid grid-cols-2 gap-4 mobile:grid-cols-3 tablet:grid-cols-6'>
          {mayLike.map((item) => (
            <div key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='mb-4 h-24 w-full rounded border object-cover object-center shadow'
              />
              <Link className='text-cyan-600 duration-150 hover:text-cyan-300'>
                <h3>{item.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMayLike;
