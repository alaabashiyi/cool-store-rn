import { createSlice } from "@reduxjs/toolkit";
import { getDataAction, searchDataAction } from "../actions/mainActions";

const initialState = {
    data: [],
    pages: null,
    results: null,
    error: null,
    isLoading: false,
    likes: [],
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        resetData: (state, action) => {
            Object.assign(state, { data: [], pages: null, results: null, error: null });
        },
        setLike: (state, action) => {
            const isLike = state.likes.find(item => item === action.payload);
            isLike ? state.likes = state.likes.filter(id => id !== isLike) : state.likes.push(action.payload);

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDataAction.fulfilled, (state, action) => {
            const { data, pages, results } = action.payload;
            state.data.push(...data);
            Object.assign(state, { pages, results, isLoading: false, error: null });
        }),
            builder.addCase(getDataAction.pending, (state, action) => {
                Object.assign(state, { isLoading: true, error: null })

            }),
            builder.addCase(getDataAction.rejected, (state, action) => {
                Object.assign(state, { error: true, isLoading: false });
            }),
            builder.addCase(searchDataAction.fulfilled, (state, action) => {
                const { data, pages, results } = action.payload;
                Object.assign(state, { data, pages, results, isLoading: false, error: null });
            }),
            builder.addCase(searchDataAction.pending, (state, action) => {
                Object.assign(state, { isLoading: true, error: null })

            }),
            builder.addCase(searchDataAction.rejected, (state, action) => {
                Object.assign(state, { error: true, isLoading: false });
            })

    },
});

export const { resetData, setLike } = mainSlice.actions;

export default mainSlice.reducer;