import React from "react";
import Navbar from "../components/navbar";
import './navbar.css';
import '../pages/AddItemPage.css';
import { useState } from "react";

function AddItemRequest() {

    const [itemName, setItemName] = useState('');
    const [itemURL, setItemURL] = useState('');
    const [category, setCategory] = useState('');
    const [reason, setReason] = useState('');

    const onSubmit = (e) => {
        if (!itemName) {
            alert("Please insert a valid item name.");
            return
        } else {
            e.preventDefault();
            axios
                .post('https://ftd-server.herokuapp.com/item/addItem', {
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
                    setCategory('');
                    setReason('');
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
                        <input type="external-url" name="external-url" value={itemImageURL} 
                        onChange={(e) => setItemImageURL(e.target.value)}/>
                    </span>

                    <span className="add-item-form-fields">
                        <label for="product-category">
                            {/* <i className="material-symbols-outlined">lock</i> */}
                            Product Category
                        </label>
                        <select id="product-category" name="product-category" onChange={(e) => setCategory(e.target.textContent)}>
                            <option value="fresh-produce">Fresh Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat-and-poultry">Meat & Poultry</option>
                            <option value="pantry">Pantry</option>
                            <option value="alcohol">Alcohol</option>
                        </select>
                    </span>

                    <span className="add-item-form-fields">
                        <label for="reason">
                            {/* <i className="material-symbols-outlined">lock</i> */}
                            Reason
                        </label>
                        <select id="product-category" name="product-category" onChange={(e) => setReason(e.target.textContent)}>
                            <option value="1">Item not listed</option>
                            <option value="2">Different brand</option>
                            <option value="3">Different size</option>
                            <option value="4">Other</option>
                        </select>
                    </span>
                    

                    <input id="submit-button" type="submit" value="Submit Request" />
                </form>
            </div>
        </div>
        
    )
}

export default AddItemRequest;