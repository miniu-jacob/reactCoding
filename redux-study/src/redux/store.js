import {createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

import reducer from './reducer';


// 스토어 설정
// const store = configureStore({ 리듀서: counterSlice.리듀서 })
// let store = configureStore({ reducer: counterSlice.reducer });
let store = configureStore( { reducer } );

 store.subscribe(()=> console.log(store.getState()))

export default store