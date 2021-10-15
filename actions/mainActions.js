import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api/axios';

export const getDataAction = createAsyncThunk(
    'main/fetchData',
    async ({ page, keyword }, thunkAPI) => {
        const res = await getProducts({ page, keyword });
        return { ...res.data };

    }
);

export const searchDataAction = createAsyncThunk(
    'main/searchData',
    async ({ page = 1, keyword }, thunkAPI) => {
        const res = await getProducts({ page, keyword });
        return { ...res.data };
    }
)