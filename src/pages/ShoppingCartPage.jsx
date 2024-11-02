// eslint-disable-next-line no-unused-vars
import React from 'react';
import ShoppingItem from '../components/ShoppingItem';

function ShoppingCartPage() {
    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Mon panier</h1>
            </div>
            <div className="shopping-cart">
                {/* // FIXME: changer nom classe  */}
                <div className="ZZZ">
                    <ShoppingItem />
                </div>
                <div className="KKK">
                    <p className="KKK-title">Total</p>
                    <hr className="KKK-divider"></hr>
                    <p className="HHH">Sous-total : </p>
                    <p className="HHH">Livraison : offerte !</p>
                    <div>
                        <button className="heart-icon pay-btn" data-testid="pay-btn-test-id">Payer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCartPage;