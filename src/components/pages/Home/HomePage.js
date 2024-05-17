import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Story from './Story';
import './HomePage.css';

function HomePage() {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <Story />
        </main>
    )
};

export default HomePage;