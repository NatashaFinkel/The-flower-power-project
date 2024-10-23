// eslint-disable-next-line no-unused-vars
import React from "react";
import ShoppingItem from "../components/ShoppingItem";

function ShoppingCartPage() {
    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Mon panier</h1>
            </div>
            <div className="ZZZ">
                <ShoppingItem />
            </div>
        </div>
    )
}
export default ShoppingCartPage;