import TestimonialsCard from "./TestimonialCard";
import Bruschetta from "./assets/profile.png"

function Testimonials() {
    return (
        <div class="testimonials-container">
            <h1>Testimonials</h1>
            <div class="testimonial-cards">
                <TestimonialsCard name="John Smith"
                                src={Bruschetta}
                                rating="4"
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TestimonialsCard name="Alice Perez"
                                src={Bruschetta}
                                rating="5"
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TestimonialsCard name="Alexander Johnson"
                                src={Bruschetta}
                                rating="5"
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TestimonialsCard name="Jane Doe"
                                src={Bruschetta}
                                rating="4"
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
    )
};

export default Testimonials;