import React from "react";
import Navbar from "../components/navbar";
import '../pages/AddItemPage.css';

function AddItemRequest() {

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
                <form action="add-request" method="POST" className="add-item-form">
                    <span className="add-item-form-fields">
                        <label for="email">
                            {/* <i className="material-symbols-outlined">item</i> */}
                            Item Name
                        </label>
                        <input type="email" name="email" />
                    </span>

                    <span className="add-item-form-fields">
                        <label for="password">
                            {/* <i className="material-symbols-outlined">lock</i> */}
                            External URL
                        </label>
                        <input type="password" name="password" />
                    </span>

                    <span className="add-item-form-fields">
                        <label for="product-category">
                            {/* <i className="material-symbols-outlined">lock</i> */}
                            Product Category
                        </label>
                        <select id="product-category" name="product-category">
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
                        <select id="product-category" name="product-category">
                            <option value="item-not-listed">Item not listed</option>
                            <option value="other">Other</option>
                        </select>
                    </span>
                    

                    <input id="submit-button" type="submit" value="Submit Request" />
                </form>
            </div>
        </div>
        
    )
}

export default AddItemRequest;