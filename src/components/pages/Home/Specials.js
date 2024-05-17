import SpecialCard from "./SpecialCard";
import GreekSaladImage from "./assets/greek-salad.jpg";
import LemonDessertImage from "./assets/lemon-dessert.jpg";
import BruschettaImage from  "./assets/bruschetta.svg";

function Special() {
    return (
        <div class="weekly-special-container">
            <div class="weekly-special-content">
                <h1>This Week's Specials!</h1>
                <a class="btn"
                href="/menu">Online Menu</a>
            </div>
            <div class="weekly-special-dishes">
                <SpecialCard dish="Greek Salad"
                    src={GreekSaladImage}
                    price="12.99"
                    desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                <SpecialCard dish="Bruschetta"
                    src={BruschettaImage}
                    price="5.99"
                    desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                <SpecialCard dish="Lemon Dessert"
                    src={LemonDessertImage}
                    price="5.00"
                    desc="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
            </div>
        </div>
    )
};

export default Special;