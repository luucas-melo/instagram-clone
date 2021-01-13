import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { StoreState } from "../store";
import theme from "./theme/reducer";
import story from "./story/reducer";
import post from "./post/recucer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "story", "post"],
};

const rootReducer = combineReducers<StoreState>({
  theme,
  story,
  post

});

export default persistReducer(persistConfig, rootReducer);
