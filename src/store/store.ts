import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import { ThemeAction, ThemeState } from './modules/theme/types';
import { StoryAction, StoryState } from './modules/story/types';
import { UsersPostsState } from './modules/post/types';

export interface StoreState {
  theme: ThemeState,
  story: StoryState,
  post:UsersPostsState
}


export type StoreAction = ThemeAction;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);