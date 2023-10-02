import React from "react";
import { IMG_URL } from "../constant";

const Carousel = ({ carousel }) => {
  return (
    <div className="carousel">
      <div className="carousel_data">
        {carousel?.slice(0, 3).map((el, id) => {
          return (
            <div key={id}>
              <img
                className="carousel_img"
                src={IMG_URL + el.imageId}
                key={id}
                alt="this is an img"
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
