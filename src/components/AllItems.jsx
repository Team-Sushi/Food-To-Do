import React, { useState } from "react";
import axios from "axios";

function GetAllItems() {
    const [allItems, setAllItems] = useState('');

    axios
    // http://localhost:3012/item
    // https://ftd-server.herokuapp.com/item
        .get('http://localhost:3012/item', 
        {withCredentials: true},
        )

        .then((response) => {
            console.log(response.data);
            setAllItems(response.data);
        })

    return(
        allItems
    )
}

export default GetAllItems;