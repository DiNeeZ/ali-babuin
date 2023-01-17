import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/breadcrumbs';
import ImageGalerry from '../../components/image-gallery';
import YouMayLike from '../../components/you-may-like';
import SimilarProducts from '../../components/similar-products';
import { MdShoppingCart } from 'react-icons/md';
import { CgDollar } from 'react-icons/cg';
import { pluralToSingular, capitalizeFirstLetter, stringToUppercase } from '../../utils';
import { products2 } from '../../assets/data';

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const elem = products2.find((product) => product.id === +id);
    setProduct(elem);
  }, [id]);

  const getDiscountedPrice = (num, persentage) => {
    let price = num - num * (persentage / 100);
    return +price.toFixed(2);
  };

  if (product)
    return (
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}>
        <div className='container'>
          <BreadCrumbs product={product} />
          <h1 className='mb-4 flex flex-wrap gap-2 text-2xl font-bold'>
            <span className='text-neutral-600'>
              {pluralToSingular(product.category).replace('-', ' ')}
            </span>
            <span className='text-neutral-600'>{capitalizeFirstLetter(product.brand)}</span>
            <span className='text-neutral-800'>{stringToUppercase(product.title)}</span>
          </h1>

          <div className='mb-16 flex flex-col gap-16 tablet:flex-row'>
            <div className='w-full tablet:w-2/3'>
              <div className='h-full'>
                <ImageGalerry images={product.images} />
              </div>
            </div>
            <div className='flex w-full flex-col gap-8 tablet:w-1/3 tablet:justify-between tablet:gap-0'>
              <div className='text-xl'>
                <span className='mb-8 block tablet:mb-4'>Price:</span>
                <span className='mb-8 flex items-start gap-4 tablet:mb-4'>
                  <span className='flex rounded-md bg-cyan-600/25 px-4 py-2 text-2xl font-bold text-red-600 shadow-md'>
                    {getDiscountedPrice(product.price, product.discountPercentage)}
                    <CgDollar size={30} />
                  </span>
                  <span className='rounded-md bg-yellow-400/50 px-4 py-1 text-base text-neutral-700 shadow-md'>
                    discount: {product.discountPercentage}%
                  </span>
                </span>
                <span
                  className='relative px-6 text-2xl font-bold 
                  after:absolute after:top-1/2 after:left-0 after:h-[2px] after:w-full after:bg-current'>
                  {product.price} <CgDollar className='inline' />
                </span>
              </div>

              <button className='flex justify-center gap-2 rounded-md bg-cyan-600 py-3 font-bold text-white duration-300 hover:bg-cyan-500 mobile:w-1/2'>
                Buy
                <MdShoppingCart
                  size={20}
                  className='inline'
                />
              </button>
            </div>
          </div>
          <div className='mb-16'>
            <p>{product.description}</p>
          </div>
        </div>
        <div className='mb-16'>
          <YouMayLike title='left' />
        </div>
        <div className='mb-16'>
          <SimilarProducts
            category={product.category}
            id={product.id}
          />
        </div>
      </motion.section>
    );
};

export default Details;
