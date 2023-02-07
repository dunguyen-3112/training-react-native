import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: false,
}

const  DataSlice = createSlice({
    name: "fetchData",
    initialState,
    reducers: {
        fetchData: (state, actions) =>{

        }
    },
})