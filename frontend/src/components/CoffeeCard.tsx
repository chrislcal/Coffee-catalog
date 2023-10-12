import { CoffeeDrink } from "../models/CoffeeDrink";
import star from "../assets/icons/star.svg";

interface CoffeeCardProps {
  drink: CoffeeDrink;
}

const CoffeeCard = ({ drink }: CoffeeCardProps) => {
  const image =
    drink.assets.thumbnail.large.uri ||
    drink.assets.fullSize.uri ||
    drink.assets.masterImage.uri;

  return (
    <div className="card" key={drink.id}>
      <div className="rating-container">
        <img className="rating-img" src={star} alt="Star Rating" />
        <p className="rating-score">4.5</p>
      </div>

      <img className="product-img" src={image} alt={drink.name} />

      <div className="info-container">

        <div className="name-container">
          <h5 className="drink-name">{drink.name}</h5>
          <p className="drink-formcode">{drink.formCode}</p>
        </div>

        <div className="price-container">
          <p className="price">
            <span className="currency-sign">$</span>2.45
          </p>
          <button className="add-btn">+</button>
        </div>

      </div>
    </div>
  );
};

export default CoffeeCard;
