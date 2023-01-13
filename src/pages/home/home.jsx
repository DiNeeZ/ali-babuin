import Hero from '../../components/hero';
import Benefits from '../../components/benefits';
import Quotes from '../../components/quotes';
import Popular from '../../components/popular/popular';
import Brands from '../../components/brands';
import PopularCategories from '../../components/popular-categories';
import Filler from '../../components/filler';
import YouMayLike from '../../components/you-may-like';

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Quotes />
      <Popular />
      <Brands />
      <Filler />
      <PopularCategories />
      <YouMayLike />
    </>
  );
};

export default Home;
