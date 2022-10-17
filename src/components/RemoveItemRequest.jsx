import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import './navbar.css';
import '../pages/AddItemPage.css';
import { useState } from "react";

function RemoveItemRequest() {

    const [itemName, setItemName] = useState('');
    const [itemURL, setItemURL] = useState('');
    const [reason, setReason] = useState('');

    const onSubmit = (e) => {
        if (!itemName) {
            alert("Please insert a valid item name.");
            return
        } else {
            e.preventDefault();
            axios
                .post('https://ftd-server.herokuapp.com/item/removeItem', {
                    itemName: itemName,
                    itemURL: itemURL,
                    reason: reason
                })
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                    alert(`Remove request success. Request to remove: ${itemName}.`)
                    setItemName('');
                    setItemURL('');
                    setReason('');
                })
                .catch((err) => {
                    console.log(err);
                    alert(`Something is wrong. Please try again later.`);
                })
        }
    }

    return (
        <div className='add-item-container'>
            <div class="add-item-button">
                <button>
                    <a href="/additem">Add Request</a>
                    <span> | </span>
                    <a href="/removeitem" style={{ fontWeight: "bold", textDecoration: "underline" }}>Remove Request</a>
                </button>
            </div>
            <form className="add-item-form" onSubmit={onSubmit}>
                <span className="add-item-form-fields">
                    <label for="item-name">
                        {/* <i className="material-symbols-outlined">person</i> */}
                        Item Name
                    </label>
                    <input type="text" name="item-name" value={itemName} 
                        onChange={(e) => setItemName(e.target.value)}/>
                </span>

                <span className="add-item-form-fields">
                    <label for="itemImageURL">
                        {/* <i className="material-symbols-outlined">person</i> */}
                        Item URL
                    </label>
                    <input type="text" name="itemURL" value={itemURL} 
                        onChange={(e) => setItemURL(e.target.value)}/>
                </span>

                <span className="add-item-form-fields">
                    <label for="reason">
                        {/* <i className="material-symbols-outlined">lock</i> */}
                        Reason
                    </label>
                    <select id="product-category" name="product-category" onChange={(e) => setReason(e.target.textContent)}>
                        <option value="1">Wrong details</option>
                        <option value="2">Item is discontinued</option>
                        <option value="3">Other</option>
                    </select>
                </span>


                <input id="submit-button" type="submit" value="Submit Request" />
            </form>
        </div>
    );

}
export default RemoveItemRequest;