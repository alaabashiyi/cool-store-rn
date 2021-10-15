import { createSlice } from "@reduxjs/toolkit";
import { getDataAction, searchDataAction } from "../actions/mainActions";

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
            Object.assign(state, { data: [...data, ...state.data], pages, results });
        },
        resetData: (state, action) => {
            console.log('reseting data')
            Object.assign(state, { data: [], pages: null, results: null });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataAction.fulfilled, (state, action) => {
            const { data, pages, results } = action.payload;
            Object.assign(state, { data: [...data, ...state.data], pages, results });

        }),
            builder.addCase(searchDataAction.fulfilled, (state, action) => {
                const { data, pages, results } = action.payload;
                Object.assign(state, { data, pages, results });
            })
    },
});

export const { setProducts, resetData } = mainSlice.actions;

export default mainSlice.reducer;