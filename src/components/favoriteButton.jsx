import React from "react";
import Navbar from "../components/navbar";
import './navbar.css';
import '../pages/AddItemPage.css';

function addFavorites() {

    return (
        <div>
            <div className='add-item-container'>
                <div class="add-item-button">
                    <button>
                        <a href="/additem" style={{ fontWeight: "bold", textDecoration: "underline" }}>
                            <img src=""></img>
                        </a>
                        <span> | </span>               
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default addFavorites;