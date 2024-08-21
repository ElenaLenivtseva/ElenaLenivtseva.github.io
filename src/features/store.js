import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice'
import modalReducer from './modalSlice'


export default configureStore({
	reducer: {
		users: usersReducer,
		modal: modalReducer
	},
});