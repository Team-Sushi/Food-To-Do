import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import './navbar.css';
import '../pages/AddItemPage.css';
import { useState } from "react";
import axios from "axios";

function AddItemRequest() {

    const [itemName, setItemName] = useState('');
    const [itemURL, setItemURL] = useState('');
    const [category, setCategory] = useState('Fresh Produce');
    const [reason, setReason] = useState('Item not listed');

    const onSubmit = (e) => {
        if (!itemName) {
            alert("Please insert a valid item name.");
            return
        } else {
            e.preventDefault();
            axios
                .post('http://localhost:5000/item/requestAdd', {
                    itemName: itemName,
                    itemURL: itemURL,
                    category: category,
                    reason: reason
                })
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                    alert(`Add request success. Request to add: ${itemName}.`)
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
        <div>
            <div className='add-item-container'>
                <div class="add-item-button">
                    <button>
                        <a href="/additem" style={{ fontWeight: "bold", textDecoration: "underline" }}>Add Request</a>
                        <span> | </span>
                        <a href="/removeitem">Remove Request</a>                    
                    </button>
                </div>
                <form className="add-item-form" onSubmit={onSubmit}>
                    <span className="add-item-form-fields">
                        <label for="item-name">
                            {/* <i className="material-symbols-outlined">item</i> */}
                            Item Name
                        </label>
                        <input type="item-name" name="item-name" value={itemName} 
                        onChange={(e) => setItemName(e.target.value)} />
                    </span>

                    <span className="add-item-form-fields">
                        <label for="external-url">
                            {/* <i className="material-symbols-outlined">lock</i> */}
                            External URL
                        </label>
                        <input type="external-url" name="external-url" value={itemURL} 
                        onChange={(e) => setItemURL(e.target.value)}/>
                    </span>

                    <span className="add-item-form-fields">
                        <label for="product-category">
                            {/* <i className="material-symbols-outlined">lock</i> */}
                            Product Category
                        </label>
                        <select id="product-category" name="product-category" onChange={(e) => setCategory(e.target.value)}>
                            <option value="Fresh Produce">Fresh Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Meat & Poultry">Meat & Poultry</option>
                            <option value="Pantry">Pantry</option>
                            <option value="Alcohol">Alcohol</option>
                        </select>
                    </span>

                    <span className="add-item-form-fields">
                        <label for="reason">
                            {/* <i className="material-symbols-outlined">lock</i> */}
                            Reason
                        </label>
                        <select id="product-category" name="product-category" onChange={(e) => setReason(e.target.value)}>
                            <option value="Item not listed">Item not listed</option>
                            <option value="Different brand">Different brand</option>
                            <option value="Different size">Different size</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                    

                    <input id="submit-button" type="submit" value="Submit Request" />
                </form>
            </div>
        </div>
        
    )
}

export default AddItemRequest;