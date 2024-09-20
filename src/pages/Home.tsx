import CoinLive from '../components/CoinLive';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TopCollections from '../components/TopCollections';

const Home = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Hero />
            <TopCollections />
            <CoinLive />
            <Footer />
        </div>
    );
};

export default Home;