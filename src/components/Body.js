import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Restaurents_Api } from "../constant";
import noRestaurentImg from "../assets/norestaurant.png";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";

const Body = () => {
  const [input, setInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [carousel, setCarousel] = useState(restaurants);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    getRestaurents();
  }, []);

  const getRestaurents = async () => {
    try {
      const data = await fetch(Restaurents_Api);
      const json = await data.json();

      setRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    } catch (err) {
      console.log(err);
    }
  };
  const filterData = () => {
    let data = restaurants.filter((ele) => {
      return ele?.info?.name
        ?.toLocaleLowerCase()
        ?.includes(input.toLocaleLowerCase());
    });
    setFilteredRestaurants(data);
    setSearchPerformed(true);
  };
  if (!restaurants) return null;
  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body-section">
      <div className="search-bar">
        <input className="search_text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for restaurants and food"
          value={input}
        ></input>
        <button onClick={filterData}>Search</button>
      </div>
      <Carousel carousel={carousel} />
      <div className="noRestaurantImg">
        {searchPerformed && filteredRestaurants?.length === 0 ? (
          <img src={noRestaurentImg} alt="this is an img" />
        ) : null}
      </div>
      <span>
        {searchPerformed ? (
          <h2  className="restaurant_length">{filteredRestaurants.length} Restaurants</h2>
        ) : (
          <h2  className="restaurant_length">{restaurants.length} Restaurants</h2>
        )}
      </span>

      <div className="Restaurent-Card">
        {filteredRestaurants?.map((el) => {
          return (
            <Link
              className="link"
              key={el?.info?.id}
              to={"/restaurent/" + el?.info?.id}
            >
              <RestaurantCard {...el?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
