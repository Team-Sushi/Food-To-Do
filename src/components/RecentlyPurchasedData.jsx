import React, { useState } from "react";
import axios from "axios";

function recentlyPurchasedItems() {
    const [recentlyBoughtItems, setRecentlyBoughtItems] = useState('');

    axios
        .get('https://ftd-server.herokuapp.com/item', 
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
