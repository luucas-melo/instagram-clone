import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { StoreState } from "../store";
import theme from "./theme/reducer";
import story from "./story/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "story"],
};

const rootReducer = combineReducers<StoreState>({
  theme,
  story,
});

export default persistReducer(persistConfig, rootReducer);
