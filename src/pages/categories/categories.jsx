import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsGrid from '../../components/products-grid';
import { motion } from 'framer-motion';
import { products2 } from '../../assets/data';

const Categories = () => {
  const { parameters } = useParams();

  const categoryItems = parameters
    .split('&')
    .map((param) => products2.filter((item) => item.category === param))
    .flat();

  return (
    <motion.section
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}>
      <ProductsGrid products={categoryItems} />
    </motion.section>
  );
};

export default Categories;
