import Hero from '../../components/hero';
import Benefits from '../../components/benefits';
import Quotes from '../../components/quotes';
import Popular from '../../components/popular/popular';
import Brands from '../../components/brands';
import Categories from '../../components/categories';
import Filler from '../../components/filler';

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Quotes />
      <Popular />
      <Brands />
      <Filler />
      <Categories />
    </>
  );
};

export default Home;
