import "./SocialMedia.css"
import SocialMediaCard from "./SocialMediaCard.jsx";

const SocialMediaMenu = () => {
  return (
    <div>
      {/* <h3>Social Media menu</h3> */}
      {/* <SocialMediaCard /> */}

      <div className="socialParent">
        <div className="div1">
          <img className="imgSocialMedia" src="https://via.placeholder.com/290x450?text=Social" alt="" />
        </div>
        <div className="div2">
          <img className="imgSocialMedia" src="https://via.placeholder.com/290x450?text=Media" alt="" />
        </div>
        <div className="div3">
          <img className="imgSocialMedia" src="https://via.placeholder.com/290x140?text=Images" alt="" />
        </div>
        <div className="div4">
          <p className="socialText">Make a statement!</p>
        </div>
        <div className="div5">
          <p className="socialText">New Customers Gets 20% Off</p>
        </div>
      </div>

    </div>
  );
};

export default SocialMediaMenu;
