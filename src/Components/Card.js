import React, { useState } from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
const Card = ({ selectedCategory, name, description, pack }) => {
  const [activeSection, setActiveSection] = useState("#about");
  const [activeCard, setActiveCard] = useState(1);
  const handleButtonClick = (targetSection, cardIndex) => {
    setActiveSection(targetSection);
    setActiveCard(cardIndex);
    console.log(" \n ");
    console.log("From Card.js Name :: ", name);
    console.log("From Card.js selectedCategory :: ", selectedCategory);
    console.log("From Card.js description :: ", description);
    console.log("From Card.js Pack :: ", pack);
  };
  return (
    <div className="">
      <div
        className={`card ${activeSection !== "#about" ? "is-active" : ""}`}
        data-state={activeSection}
      >
        <div className="card-header">
          <div className="card-cover"></div>
          <img
            className="card-avatar"
            src="https://www.pngfind.com/pngs/b/118-1185076_silver-png-hd-png-hd-image-all-type.png"
            alt="avatar"
          />
          <h1 className="card-fullname">{pack} Package</h1>
          <h2 className="card-jobtitle">399</h2>
        </div>
        <div className="card-main">
          <div
            className={`card-section ${activeCard === 1 ? "is-active" : ""}`}
            id="about"
          >
            <div className="card-content">
              <div className="card-subtitle">{name}</div>
              <p className="card-desc">{description}</p>
            </div>
          </div>

          <div
            className={`card-section ${activeCard === 2 ? "is-active" : ""}`}
            id="experience"
          >
            <div className="card-content">
              <div className="card-subtitle">Menu - per day</div>
              <div className="card-timeline">
                <div className="card-item" /*data-year="2014"*/>
                  <div className="card-item-title">
                    Roti <span>Bhujiya</span>
                  </div>
                  {/* <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div> */}
                </div>
                <div className="card-item" /*data-year="2016"*/>
                  <div className="card-item-title">
                    Rice Dal <span>Sabji</span>
                  </div>
                  {/* <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div> */}
                </div>
                <div className="card-item" /*data-year="2018"*/>
                  <div className="card-item-title">
                    Sandwich<span>Soft-drink</span>
                  </div>
                  {/* <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div> */}
                </div>
                <div className="card-item" /*data-year="2020"*/>
                  <div className="card-item-title">
                    Roti Dal <span>Sabji</span>
                  </div>
                  {/* <div className="card-item-desc">
                    Lorem IpsumLorem IpsumLorem Ipsum
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`card-section ${activeCard === 3 ? "is-active" : ""}`}
            id="contact"
          >
            <div className="card-content">
              <div className="card-subtitle">ORDER NOW</div>
              <div className="card-contact-wrapper">
                <div className="card-contact">
                  <HiOutlineCurrencyRupee />
                  Rs 69
                </div>
                <div className="card-contact">
                  <BsTelephone />
                  6969696969
                </div>
                <div className="card-contact">
                  <FiMail />
                  ankur@sarkar.com
                </div>
                <button className="contact-me">BUY</button>
              </div>
            </div>
          </div>

          <div className="card-buttons">
            <button
              className={`card-nav-item ${
                activeSection === "#about" ? "is-active" : ""
              }`}
              onClick={() => handleButtonClick("#about", 1)}
            >
              About
            </button>
            <button
              className={`card-nav-item ${
                activeSection === "#experience" ? "is-active" : ""
              }`}
              onClick={() => handleButtonClick("#experience", 2)}
            >
              Details
            </button>
            <button
              className={`card-nav-item ${
                activeSection === "#contact" ? "is-active" : ""
              }`}
              onClick={() => handleButtonClick("#contact", 3)}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
