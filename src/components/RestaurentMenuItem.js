import React from "react";
import { IMG_URL } from "../constant";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../redux/cartSlice";
import Shimmer from "../components/Shimmer";

const RestaurentMenuItem = ({ menuItem }) => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };
  const removeFoodItem = (item, itemCount) => {
    if (itemCount > 0) {
      dispatch(removeItems(item));
    }
  };
  return (
    <div>
      {menuItem?.map((el, id) => {
        console.log(el);
        if (id > 0 && el?.card?.card?.title !== undefined)
          return (
            <div key={id}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <p className="menu_item_title">
                      <p className="title_text">{el?.card?.card.title}</p>
                    </p>
                    <div className="total-items">
                      {el?.card?.card.itemCards?.length > 0
                        ? el?.card?.card.itemCards?.length
                        : 0}{" "}
                      Items
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {el?.card?.card?.itemCards?.length > 0 ? (
                      el?.card?.card?.itemCards?.map((item, id) => {
                        return (
                          <div className="menu_container" key={id}>
                            <img
                              src={IMG_URL + item?.card?.info?.imageId}
                              alt="this is an img"
                            ></img>
                            <span className="add_remove_btn">
                              <button
                                className="btn"
                                onClick={() =>
                                  removeFoodItem(
                                    item?.card?.info,
                                    cartItems[item?.card?.info?.name]?.["count"]
                                  )
                                }
                              >
                                -
                              </button>
                              <button className="btn">
                                {cartItems[item?.card?.info?.name]?.["count"] >
                                0
                                  ? cartItems[item?.card?.info?.name]?.["count"]
                                  : 0}
                              </button>
                              <button
                                className="btn"
                                onClick={() => addFoodItem(item?.card?.info)}
                              >
                                +
                              </button>
                            </span>
                            <div className="menu_container_info">
                              <p className="item_name">
                                {item?.card?.info?.isVeg === 1 ? (
                                  <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/15px-Veg_symbol.svg.png"
                                    alt="veg-log"
                                    style={{ marginRight: "5px" }}
                                  />
                                ) : (
                                  <img
                                    src="https://icon2.cleanpng.com/20180401/xxq/kisspng-computer-icons-computer-software-light-non-veg-food-5ac181d3ec0df5.8954980715226311239669.jpg"
                                    alt="non-veg-logo"
                                    style={{
                                      width: "15px",
                                      marginRight: "5px",
                                    }}
                                  />
                                )}

                                {item?.card?.info?.name}
                              </p>
                              <p>
                                ₹
                                {Math.floor(
                                  item?.card?.info?.price > 0
                                    ? item?.card?.info?.price / 100
                                    : item?.card?.info?.defaultPrice / 100
                                )}
                              </p>
                              <p>{item?.card?.info?.description}</p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="no-items-found">
                        <h2>
                          Sorry!! Currently No Items Available In This Category.
                        </h2>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
      })}
    </div>
  );
};

export default RestaurentMenuItem;
