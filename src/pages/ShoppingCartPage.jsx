// eslint-disable-next-line no-unused-vars
import React from 'react';
import ShoppingItem from '../components/ShoppingItem';

function ShoppingCartPage() {
    //TODO : si panier vide --> message + purchase-summary-container (?)

    //TODO: fonction "sous-total".

    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Mon panier</h1>
            </div>
            <div className="shopping-cart">
                <div className="shopping-list" key="shopping-list" data-testid="shopping-item-container">
                    <ShoppingItem />
                </div>
                <div className="purchase-summary-container">
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