import TestimonialsCard from "./TestimonialCard";
import Bruschetta from "./assets/bruschetta.svg"

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
                <TestimonialsCard name="John Smith"
                                src={Bruschetta}
                                rating="4"
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TestimonialsCard name="John Smith"
                                src={Bruschetta}
                                rating="4"
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TestimonialsCard name="John Smith"
                                src={Bruschetta}
                                rating="4"
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            
        </div>
    )
};

export default Testimonials;