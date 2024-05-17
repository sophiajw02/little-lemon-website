function TestimonialsCard(props) {
    return (
        <div class="testimonial-card">
            <div class="testimonial-card-author">
                <img src={props.src}
                alt={props.name}
                />
                <p>{props.name}</p>
                <p>{props.rating}</p>
            </div>
            <p>{props.review}</p>
        </div>
    )
}

export default TestimonialsCard;