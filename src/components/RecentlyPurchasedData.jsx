import React, { useState } from "react";
import axios from "axios";

function recentlyPurchasedItems() {
    const [recentlyBoughtItems, setRecentlyBoughtItems] = useState('');

    axios
        .get('http://localhost:9000/item/recentlyBoughtItems', 
        {withCredentials: true},
        )

        .then((response) => {
            setRecentlyBoughtItems(response.data);
        })

    return(
        recentlyBoughtItems
    )
}

export default recentlyPurchasedItems;
