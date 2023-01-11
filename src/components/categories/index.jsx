import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../assets/data';

const Categories = () => {
  return (
    <section>
      <div className='container'>
        <ul
          className='grid grid-cols-1 gap-4 
          mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4'>
          {categories.map((category) => (
            <li
              key={category.id}
              className='group/category relative z-0 cursor-pointer overflow-hidden rounded-lg shadow-xl'>
              <Link
                className='group/link'
                to={`/products/${category.title}`}>
                <h3
                  className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap
                  rounded border border-white/30 bg-white/40 px-6 py-3 text-lg font-black
                  uppercase tracking-wide text-neutral-900 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm
                  duration-1000 group-hover/category:bg-white/75 group-focus/link:bg-white/75'>
                  {category.title.replace('-', ' ')}
                </h3>

                <img
                  src={category.image}
                  alt={category.title}
                  className='transition-transform duration-1000 group-hover/category:scale-110 group-focus/link:scale-110'
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
