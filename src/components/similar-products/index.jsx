import React from 'react';
import { Link } from 'react-router-dom';

import { getMultipleRandom } from '../../utils';
import { products2 } from '../../assets/data';

const SimilarProducts = ({ category, id }) => {
  const filtered = products2.filter(
    (product) => product.category === category && product.id !== id
  );
  const similar = getMultipleRandom(filtered, 3);

  console.log(similar);

  return (
    <div className='container'>
      <h2 className='mb-8 text-2xl font-bold'>More like this</h2>
      <div className='flex flex-wrap gap-4'>
        {similar.map((item) => (
          <div key={item.id}>
            <Link
              className='group/similar-link flex w-64 flex-col items-center justify-center text-cyan-600 
							duration-150 hover:text-cyan-300'>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='mb-4 h-36 w-full rounded border object-cover object-center shadow-lg duration-150 
								group-hover/similar-link:shadow-neutral-400/50'
              />
              <h3 className='px-1 text-center'>{item.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
