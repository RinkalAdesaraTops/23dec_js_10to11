import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    count:0
}
const RtkCounterReducer = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{
           state.count +=1
        },
        decrement:(state)=>{
            state.count -=1
        }
    }
})

export const {increment,decrement} = RtkCounterReducer.actions
export default RtkCounterReducer.reducer
