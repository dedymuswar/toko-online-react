import { combineReducers } from 'redux'

import { persistReducer } from 'redux-persist' //1
import storage from 'redux-persist/lib/storage' //2

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}//3

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})//4

export default persistReducer(persistConfig, rootReducer)