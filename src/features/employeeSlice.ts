import { mockEmployee } from "../data/MockEmployee"
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    employee: sessionStorage.getItem("employees") || mockEmployee
}


export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    }

})

// export const { logout } = employeeSlice.actions;
export default employeeSlice.reducer