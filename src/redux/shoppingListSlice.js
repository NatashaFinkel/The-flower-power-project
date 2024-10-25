import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: JSON.parse(localStorage.getItem("shoppingList")) || JSON.parse(sessionStorage.getItem("shoppingList")) || [],
    isThisBouquetSaved: false,
    isThereAnError: false,
}

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
                state.isThisBouquetSaved = true;
            } else {
                state.array = state.array.filter(bouquet => bouquet.id !== action.payload.id);
                state.isThisBouquetSaved = false;
            }
        }
    },
})
export const { addToShoppingList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;