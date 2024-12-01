import React from "react";

import { Inventory } from "../features/inventory/Inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.js";
import { Cart } from "../features/cart/Cart.js";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";

export const App = (props) => {
  const { state, dispatch } = props;

  const visibleAllProducts = getFilteredProducts(state.inventory, state.searchTerm);

  return (
    <div>
      <SearchTerm 
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <CurrencyFilter 
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Inventory 
        inventory={visibleAllProducts}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart 
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );

  function getFilteredProducts(inventory, searchTerm){
    return inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

};
