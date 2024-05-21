import "./TestimonialCard.css"

function TestimonialsCard(props) {
    return (
        <div class="testimonial-card">
            <div class="testimonial-author">
                <img src={props.src}
                alt={props.name}
                />
                <p>{props.name}</p>
            </div>
            <p class="testimonial-rating"><span>{props.rating}</span> out of 5</p>
            <p class="testimonial-review">{props.review}</p>
        </div>
    )
}

export default TestimonialsCard;