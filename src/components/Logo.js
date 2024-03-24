import React, { useState } from "react";
import img1 from "../img/kisspng-computer-icons-shopping-cart-shopping-cart-decoration-5ae1d7b8251885.901689401524750264152.jpg";
import "./Logo.scss";

function Logo() {
  const [showHeading, setShowHeading] = useState(false);

  const handleAnimation = () => {
    setShowHeading(true);
  };
  return (
    <div className="container">
      <img
        src={img1}
        alt="img1"
        className="img1"
        onAnimationEnd={handleAnimation}
      />
      {showHeading && <h1 className="show-heading">Lets Do shopping</h1>}
    </div>
  );
}

export default Logo;
