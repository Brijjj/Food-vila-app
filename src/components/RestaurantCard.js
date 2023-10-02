import React from "react";
import { IMG_URL } from "../constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  costForTwo,
  cuisines,
  sla,
}) => {
  return (
    <div className="Restaurant-Card">
      <div className="Restaurant-detail">
        <img
          className="image"
          src={IMG_URL + cloudinaryImageId}
          alt="this is an img"
        ></img>
        <div className="Restaurant-content">
          <span className="name"> {name}</span>
          <br></br>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <div className="card-footer">
            {avgRating > 4 ? (
              <span className="goodRatting">{avgRating}</span>
            ) : (
              <span className="badRatting">{avgRating}</span>
            )}
            <span> {sla.slaString}</span>
            <span>{costForTwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
