import React from "react";
import { IMG_URL } from "../constant";
import { MdLocalOffer } from "react-icons/md";

const RestaurantMenuDetails = ({ restaurant }) => {
  return (
    <div>
      {restaurant?.map((ele, id) => {
        const info = ele?.card?.card?.info;
        if (!info) return null; // Skip rendering if info is not available

        return (
          <div key={id} className="menu_card_header">
            <img src={IMG_URL + info?.cloudinaryImageId} alt="this is an img" />
            <div className="menu_card_detail">
              <h3> {info?.name}</h3>
              <h4> {info?.cuisines?.join(", ")}</h4>
              <h4>{info?.city}</h4>
              <div className="ratting_container">
                <h4>★ {info?.avgRating}</h4>
                <h4>₹ {info?.costForTwo / 100}</h4>
              </div>
            </div>
            <div
              className="restaurant-offer-container"
              style={{ color: "white" }}
            >
              <h2>OFFER</h2>
              <div className="flex gap-2 items-center">
                <MdLocalOffer /> 50% Off on all orders
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <MdLocalOffer /> FREE DELIVERY
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuDetails;
