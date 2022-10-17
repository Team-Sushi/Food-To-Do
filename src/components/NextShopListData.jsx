import React, { useState } from "react";
import axios from "axios";

function nextShopItems() {
    const [shoppingList, setShoppingList] = useState('');

    axios
        .get('https://ftd-server.herokuapp.com/item', 
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