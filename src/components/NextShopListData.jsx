import React, { useState } from "react";
import axios from "axios";

function nextShopItems() {
    const [shoppingList, setShoppingList] = useState('');

    axios
        // http://localhost:3012/item/shoppingList
        // https://ftd-server.herokuapp.com/item/shoppingList
        .get('https://ftd-server.herokuapp.com/item/shoppingList', 
        {withCredentials: true},
        )

        .then((response) => {
            setShoppingList(response.data);
        })

    return(
        shoppingList
    )
}

export default nextShopItems;