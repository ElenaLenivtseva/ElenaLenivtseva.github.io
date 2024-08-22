import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice'
import modalReducer from './slices/modalSlice'


export default configureStore({
	reducer: {
		users: usersReducer,
		modal: modalReducer
	},
});