import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ImageGalerry from '../../components/image-gallery';
import YouMayLike from '../../components/you-may-like';
import SimilarProducts from '../../components/similar-products';
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

  console.log(product);

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
          <div>
            <h1 className='mb-4 flex flex-wrap gap-2 text-2xl font-bold'>
              <span className='text-neutral-600'>
                {pluralToSingular(product.category).replace('-', ' ')}
              </span>
              <span className='text-neutral-600'>{capitalizeFirstLetter(product.brand)}</span>
              <span className='text-neutral-800'>{stringToUppercase(product.title)}</span>
            </h1>
          </div>
          <div className='mb-16 flex gap-16'>
            <div className='w-2/3'>
              <div className='h-full'>
                <ImageGalerry images={product.images} />
              </div>
            </div>
            <div className='w-1/3'>
              <div className='flex items-center gap-4 text-xl'>
                Price:
                <span className='flex items-center rounded-md bg-cyan-600 px-4 py-2 text-white'>
                  <span className='text-2xl font-bold'>{product.price}</span>
                  <CgDollar size={20} />
                </span>
              </div>
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
