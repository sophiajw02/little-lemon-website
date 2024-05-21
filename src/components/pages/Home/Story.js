import StoryImageA from "./assets/story-image-front.jpg";
import StoryImageB from "./assets/story-image-back.jpg";

function Story() {
    return (
        <section class="story">
            <div class="story-container">
            <div class="story-content">
                <h1>Our Story</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="story-images">
                <img src={StoryImageA}
                class="story-image-1"
                alt="Restaurant interior"
                />
                <img src={StoryImageB}
                class="story-image-2"
                alt="Restaurant interior"
                />
            </div>
            </div>
        </section>
    )
};

export default Story;