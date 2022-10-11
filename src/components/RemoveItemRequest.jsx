import React from "react";
import Navbar from "../components/navbar";
import './navbar.css';
import '../pages/AddItemPage.css';

class RemoveItemRequest extends React.Component {

    render() {
        return (
            <div className='add-item-container'>
                <div class="add-item-button">
                    <button>
                        <a href="/additem">Add Request</a>
                        <span> | </span>
                        <a href="/removeitem" style={{ fontWeight: "bold", textDecoration: "underline" }}>Remove Request</a>
                    </button>
                </div>
                <form action="signup" method="POST" className="add-item-form">
                    <span className="add-item-form-fields">
                        <label for="firstname">
                            {/* <i className="material-symbols-outlined">person</i> */}
                            Item Name
                        </label>
                        <input type="text" name="firstname" />
                    </span>

                    <span className="add-item-form-fields">
                        <label for="itemURL">
                            {/* <i className="material-symbols-outlined">person</i> */}
                            Item URL
                        </label>
                        <input type="text" name="itemURL" />
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

}

export default RemoveItemRequest;