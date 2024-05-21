import HeroImage from "./assets/hero-image.jpg"

function Hero() {
    return (
        <section class="hero">
            <div class="hero-container">
            <div class="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a class="btn"
                    href="/booking">
                    Reserve a Table
                </a>
            </div>
            <img src={HeroImage}
                class="hero-image"
                alt="Restaurant interior"
            />
            </div>
        </section>
    )
};

export default Hero;