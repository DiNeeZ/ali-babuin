import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { products2 } from '../../assets/data';
import ImageGalerry from '../../components/image-gallery';

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const elem = products2.find((product) => product.id === +id);
    setProduct(elem);
  }, [id]);

  if (!product) return;

  console.log(product);

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
        <div className='flex gap-4'>
          <div className='max-h-[600px] basis-1/2'>
            <div className='h-full'>
              <ImageGalerry images={product.images} />
            </div>
          </div>
          <div className='basis-1/2'>
            <h1 className='mb-4 text-2xl font-bold'>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Details;
