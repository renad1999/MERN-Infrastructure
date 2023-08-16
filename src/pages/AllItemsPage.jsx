import React, { useEffect, useState } from "react";
import * as itemsAPI from '../utilities/items-api';
import { Link } from "react-router-dom";
import Wishlist from "../components/Wishlist";

export default function AllItems() {
  const [clothingItems, setItems] = useState([]);
  // const [wishlist, setWishlist] = useState([]);
  // const [isPressed, setIsPressed] = useState(false); // Add state for the pressed state

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setItems(items);
    }
    getItems();
  }, []);

  // function handleAddToWishlist(item) {
  //   setWishlist([...wishlist, item]);
  //   setIsPressed(true); // Set the state to true when the button is pressed
  // }

  return (
    <div>
      <div className="items-title">
        <h1>ALL ITEMS</h1>
        <ul>
          {clothingItems.map((item, idx) => (
            <div key={idx} className="product-details">
              <li className="item-container">
                <Link to={`/${item._id}`}>
                  <p className="allitems-img">
                    <img src={item.image} width="20%" height="auto" alt="" />
                  </p>
                  <p>{item.name}</p>
                  <p>£{item.price}</p>
                </Link>
              </li>
              <div className="buttons">
                {/* <div className="wishlist"> */}
                  {/* <button
                    className={`heart ${isPressed ? "pressed" : ""}`}
                    onClick={() => handleAddToWishlist(item)}
                  >
                    ♡
                  </button> */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
