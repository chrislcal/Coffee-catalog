import avatar from "../assets/images/Avatar.png";
import hamburger from "../assets/icons/hamburger.svg";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <button title="hamburger" className="hamburger">
          <img src={hamburger} alt="Hamburger menu" />
        </button>
        <button title="profile" className="avatar">
          <img src={avatar} alt="profile picture" id="profile" />
        </button>
      </div>
    </>
  );
};

export default Topbar;
