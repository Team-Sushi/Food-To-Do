import React, { useState } from "react";
import axios from "axios";

function nextShopItems() {
    const [shoppingList, setShoppingList] = useState('');

    axios
        .get('http://localhost:9000/item/shoppingList', 
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