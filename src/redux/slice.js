import { createSlice } from "@reduxjs/toolkit";

const initialState={
signedUpUser:[{name:"Abc",email:"abc@g.com",password:"abc",option:2}],
user:{}
}


export const dataSlice=createSlice({
    name:"userData",
    initialState,
    reducers:{
        saveData:(state,action)=>{
            state.signedUpUser= [... state.signedUpUser, action.payload]
        },
        userInfo:(state,action)=>{
            state.user=action.payload
        }

    }
})

export const {saveData,userInfo}=dataSlice.actions
export default dataSlice.reducer