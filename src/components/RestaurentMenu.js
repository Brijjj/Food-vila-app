import React, { useEffect, useState } from "react";
import { Restaurent_Menu_Api } from "../constant";
import { useParams } from "react-router-dom";
import RestaurentMenuHeader from "./RestaurentMenuHeader";
import RestaurentMenuItem from "./RestaurentMenuItem";

const RestaurentMenu = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRestaurentDetail();
  }, []);

  const getRestaurentDetail = async () => {
    try {
      const response = await fetch(Restaurent_Menu_Api + id);
      const json = await response.json();
      setRestaurant(json?.data?.cards);
      setMenuItem(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <RestaurentMenuHeader restaurant={restaurant} />
      <RestaurentMenuItem menuItem={menuItem} />
    </div>
  );
};

export default RestaurentMenu;
