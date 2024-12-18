// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromShoppingList } from '../redux/shoppingListSlice';
import Image from './Image';

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
                    <Image imageSrc={bouquet.imgSrc} imageAlt={bouquet.imgAlt} />
                    <div className="shopping-list-txt-content">
                        <h2 className="shopping-item-title">{bouquet.title}</h2>
                        <p className="bouquet-price">{bouquet.price}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-trash-can trash-can-icon" id={`${bouquet.id}`} onClick={removeBouquet}></i>
                    </div>
                </div>
            </div>
        ))
    );
}

export default ShoppingItem;