import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Delicious, nutritious meals.",
      text: "Enjoy delicious and nutritious home-style meals delivered to your doorstep with Bhojanam. Say goodbye to unhealthy fast food and hello to healthy eating.",
    },
    {
      image: ChooseMeals,
      title: "Customised meals.",
      text: "With Bhojanam, you can customise your meals according to your dietary needs. Our team of chefs use only the freshest ingredients to ensure you get the best flavours.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "We prioritize the delivery speed to ensure that customers receive their meals hot and fresh. We also use state-of-the-art thermal packaging to maintain the temperature of the food during transit.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How We Work</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
