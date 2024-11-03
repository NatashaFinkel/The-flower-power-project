import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    array: JSON.parse(localStorage.getItem("shoppingList")) || JSON.parse(sessionStorage.getItem("shoppingList")) || [],
};

const shoppingListSlice = createSlice({
    name: 'addToShoppingList',
    initialState,
    reducers: {
        addToShoppingList: (state, action) => {
            const bouquetExists = state.array.some(
                bouquet => bouquet.id === action.payload.id
            );
            if (!bouquetExists) {
                state.array.push(action.payload);
            } else {
                state.array = state.array.filter(bouquet => bouquet.id !== action.payload.id);
            }
        },
    },
});

export const { addToShoppingList, addColorToHeartIcon } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;