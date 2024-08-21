import { createSlice } from "@reduxjs/toolkit";



  
export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: '',
    info: {}
  },
  reducers: {
    openModal(state,action){
        state.isOpen='true';
        state.info = action.payload
    },
    closeModal(state){
        state.isOpen='';
        state.info = {}
    },
  },
  
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
