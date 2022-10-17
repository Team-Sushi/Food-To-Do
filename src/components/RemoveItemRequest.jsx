import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import './navbar.css';
import '../pages/AddItemPage.css';
import { useState } from "react";
import axios from "axios";

function RemoveItemRequest() {

    const [itemName, setItemName] = useState('');
    const [itemURL, setItemURL] = useState('');
    const [reason, setReason] = useState('Wrong details');

    const onSubmit = (e) => {
        if (!itemName) {
            alert("Please insert a valid item name.");
            return
        } else {
            e.preventDefault();
            axios
                .post('http://localhost:5000/item/requestRemove', {
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
                    <select id="product-category" name="product-category" onChange={(e) => setReason(e.target.value)}>
                        <option value="Wrong details">Wrong details</option>
                        <option value="Item is discontinued">Item is discontinued</option>
                        <option value="Other">Other</option>
                    </select>
                </span>


                <input id="submit-button" type="submit" value="Submit Request" />
            </form>
        </div>
    );

}
export default RemoveItemRequest;