// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ShoppingItem from '../components/ShoppingItem';

function ShoppingCartPage() {
    //TODO : si panier vide --> message + purchase-summary-container (?)

    //TODO: fonction "sous-total".

    const array = useSelector(state => state.shoppingList.array);

    useEffect(() => {
        const shoppingItemContainer = document.getElementById("shopping-item-container");
        const purchaseSummaryContainer = document.getElementById("purchase-summary-container");

        if (array.length === 0) {
            shoppingItemContainer.style.display = "none";
            purchaseSummaryContainer.style.display = "none";

        } else {
            shoppingItemContainer.style.display = "flex";
            purchaseSummaryContainer.style.display = "flex";
        }
    }, [array]);

    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Mon panier</h1>
            </div>
            <div className="shopping-cart" id="shopping-cart">
                <div className="shopping-list" key="shopping-list" id="shopping-item-container" data-testid="shopping-item-container-test-id">
                    <ShoppingItem />
                </div>
                <div className="purchase-summary-container" id="purchase-summary-container" data-testid="purchase-summary-container-test-id">
                    <p>Total</p>
                    <hr className="purchase-summary-container-divider"></hr>
                    <p className="purchase-summary-txt">Sous-total : </p>
                    <p className="purchase-summary-txt">Livraison : offerte !</p>
                    <div>
                        <button className="heart-icon pay-btn" data-testid="pay-btn-test-id">Payer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage;