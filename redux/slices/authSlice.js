import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers:{

    }
})


export default authSlice