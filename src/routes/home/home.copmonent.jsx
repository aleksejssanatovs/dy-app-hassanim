import './home.styles.css'

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
        <Link to="shop">START SHOPPING</Link>
    </div>
  );
};

export default Home;