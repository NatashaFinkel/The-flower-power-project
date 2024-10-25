// eslint-disable-next-line no-unused-vars
import React from 'react';

function ShoppingItem() {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    return (
        <div className="shopping-list" key="shopping-list">
            {
                shoppingList.map(bouquet => {
                    return (
                        <div key={bouquet.id} id={bouquet.id}>
                                   {/* // FIXME: changer nom classe  */}
                            <div className="AAA">
                                <img src={bouquet.imgSrc} alt={bouquet.imgAlt}
                                    className="saved-bouquet-img" key={bouquet.imgSrc}
                                />
                                <div>
                                    <p>{bouquet.title}</p>
                                </div>
                                <div>
                                    {/*  
                                   // TODO: manque prix (ShoppinItem.jsx)     
                                    */}
                                    <p>prix</p>
                                </div>
                                <div>
                                    <i className="fa-solid fa-trash-can trash-can-icon"></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShoppingItem;