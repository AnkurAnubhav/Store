import React, { useEffect } from "react";

import { calculatePrice } from "../../utils/utilities.js";
import { getCurrencySymbol } from "../../utils/utilities.js";
import { loadData } from "./inventorySlice.js";
import { addToCart } from "../cart/cartSlice.js";


export const Inventory = ({inventory, currencyFilter, dispatch}) => {

    const onMount = () => {
        dispatch(loadData());
    };
    useEffect(onMount, [dispatch]);

    const onClickHandler = (item) => {
        dispatch(addToCart(item));
    }

    if(inventory.length === 0){
        return <p>Sorry, No Data Available</p>
    }

    return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

    function createInventoryItem(inventoryItem){
        const {price, name, img} = inventoryItem;
        const displayPrice = calculatePrice(price, currencyFilter);
        return (
            <li key={name} className="item">
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <h3 className="price">
                    {getCurrencySymbol(currencyFilter)}
                    {displayPrice.toFixed(2)} {currencyFilter}
                </h3>
                <button onClick={() => onClickHandler(inventoryItem)}
                    className="add-to-cart-button">
                    Add To Cart
                </button>
            </li>
        );
    }
};