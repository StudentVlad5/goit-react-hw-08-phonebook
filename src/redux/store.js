import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import {contactsReducer} from './contactsSlice';


const rootReducer = combineReducers ({
    contacts: contactsReducer,
    filters: filtersReducer,   
})


export const store = configureStore({
    reducer : rootReducer,
})


