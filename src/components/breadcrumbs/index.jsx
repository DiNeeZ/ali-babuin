import { Link } from 'react-router-dom';
import { TiHomeOutline } from 'react-icons/ti';

const BreadCrumbs = ({ product }) => {
  return (
    <ul className='mb-4 flex items-start gap-6 text-cyan-700'>
      <li className='text-xl font-semibold'>
        <Link to='/'>
          <TiHomeOutline size={25} />
        </Link>
      </li>
      <li className='text-xl font-semibold'>{`${'>'}`}</li>
      <li className='text-xl font-semibold'>
        <Link to={`/categories/${product.category}`}>
          {product.category
            .split('-')
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(' ')}
        </Link>
      </li>
      <li className='text-xl font-semibold'>{`${'>'}`}</li>
      <li className='text-xl font-semibold text-neutral-500'>
        {product.title
          .split(' ')
          .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
          .join(' ') + ' ...'}
      </li>
    </ul>
  );
};

export default BreadCrumbs;
