import React from "react";
import Navbar from "../components/navbar";
import './navbar.css';
import '../pages/AddItemPage.css';
import { useState } from "react";

function RemoveItemRequest() {

    const [itemName, setItemName] = useState('')
    const [itemImageURL, setItemImageURL] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!itemName) {
            alert("Please insert a valid remove request.")
            return
        } else {
            alert("Remove request success. Request to remove: "+{itemName}+".")

            setItemName('')
            setItemImageURL('')
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
            <form action="signup" method="POST" className="add-item-form" onSubmit={onSubmit}>
                <span className="add-item-form-fields">
                    <label for="item-name">
                        {/* <i className="material-symbols-outlined">person</i> */}
                        Item Name
                    </label>
                    <input type="text" name="item-name" value={itemName} 
                        onChange={(e) => setItemName(e.target.value)}/>
                </span>

                <span className="add-item-form-fields">
                    <label for="itemURL">
                        {/* <i className="material-symbols-outlined">person</i> */}
                        Item URL
                    </label>
                    <input type="text" name="itemURL" value={itemImageURL} 
                        onChange={(e) => setItemImageURL(e.target.value)}/>
                </span>

                <span className="add-item-form-fields">
                    <label for="reason">
                        {/* <i className="material-symbols-outlined">lock</i> */}
                        Reason
                    </label>
                    <select id="product-category" name="product-category">
                        <option value="item-discontinued">Item discontinued</option>
                        <option value="other">Other</option>
                    </select>
                </span>


                <input id="submit-button" type="submit" value="Submit Request" />
            </form>
        </div>
    );
    }

export default RemoveItemRequest;