import home from "../assets/icons/home.svg";
import shoppingCart from "../assets/icons/shopping_cart.svg";
import likes from "../assets/icons/likes.svg";
import notifications from "../assets/icons/notifications.svg";


const Menubar = () => {
  return (
    <div className="menubar">
      <footer>
        <button title="Home">
          <img alt="home" src={home}></img>
        </button>
        <button title="Shopping cart">
          <img alt="shopping cart" src={shoppingCart}></img>
        </button>
        <button title="Likes">
          <img alt="liked coffee drinks" src={likes}></img>
        </button>
        <button title="Notifications">
          <img alt="notifications" src={notifications}></img>
        </button>
      </footer>
    </div>
  );
};

export default Menubar;
