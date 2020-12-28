import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { StoreState } from '../store';


import theme from './theme/reducer';
const persistConfig = {
    key: 'root',
    storage,  
    whitelist: ['theme'],
  };
  
const rootReducer = combineReducers<StoreState>({
  theme,
});

export default persistReducer(persistConfig, rootReducer);