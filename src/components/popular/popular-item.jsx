import { Link } from 'react-router-dom';

const PopularItem = ({ item }) => {
  return (
    <div className='pb-12'>
      <div className='overflow-hidden rounded-lg border shadow-md'>
        <div className='h-80'>
          <img
            src={item.thumbnail}
            alt={item.title}
            className='h-full w-full object-cover object-center'
          />
        </div>
        <Link
          to={`/details/${item.id}`}
          className='block bg-neutral-700 p-4 text-white duration-300 hover:bg-neutral-600'>
          <h3 className='flex h-16 items-center justify-center text-center'>
            {item.title.toUpperCase()}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default PopularItem;
