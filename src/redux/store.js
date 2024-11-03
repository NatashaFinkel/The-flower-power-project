import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './shoppingListSlice';

export const store = configureStore({
    reducer: {
        shoppingList: shoppingListReducer,
    },
});
