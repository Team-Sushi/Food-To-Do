import React, { useState } from "react";
import axios from "axios";

function GetAllItems() {
    const [allItems, setAllItems] = useState('');

    axios
        .get('http://localhost:9000/item', 
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