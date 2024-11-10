// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromShoppingList } from '../redux/shoppingListSlice';

function ShoppingItem() {
    const dispatch = useDispatch();
    const array = useSelector(state => state.shoppingList.array);
    const [shoppingList, setShoppingList] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);

    const removeBouquet = (event) => {
        let eventTarget = event.target;
        const updatedShoppingList = shoppingList.filter(bouquet => bouquet.id !== eventTarget.id);
        dispatch(removeFromShoppingList({ id: eventTarget.id }));
        localStorage.setItem("shoppingList", JSON.stringify(updatedShoppingList));
        setShoppingList(updatedShoppingList);
    };

    useEffect(() => {
        localStorage.setItem("shoppingList", JSON.stringify(array));
    }, [array]);

    return (
        shoppingList.map(bouquet => (
            <div key={bouquet.id} id={`${bouquet.id}-shopping-cart`}>
                <div className="shopping-item-div">
                    <img src={bouquet.imgSrc} alt={bouquet.imgAlt} className="saved-bouquet-img" />
                    <div className="shopping-list-txt-content">
                        <p className="shopping-item-title">{bouquet.title}</p>
                        <p>{bouquet.price}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-trash-can trash-can-icon" id={`${bouquet.id}-trash-icon`} onClick={removeBouquet}></i>
                    </div>
                </div>
            </div>
        ))
    );
}

export default ShoppingItem;