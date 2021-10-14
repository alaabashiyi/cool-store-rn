import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    pages: null,
    results: null,
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            const { data, pages, results } = action.payload;
            Object.assign(state, { data, pages, results });
        },
        setMoreProducts: (state, action) => {
            state.data = [...state.data, ...action.payload];
        }
    }
});

export const { setProducts, setMoreProducts } = mainSlice.actions;

export default mainSlice.reducer;