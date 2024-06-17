import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getProducts = createAsyncThunk("products", async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
})

export const productSlice = createSlice({
    name:"products",
    initialState:{
        status:"idle",
        data:[],
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getProducts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.status = 'success'
            state.data = action.payload
        })
    },
});

export default productSlice.reducer;

