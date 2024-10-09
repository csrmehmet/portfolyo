import { legacy_createStore as createStore ,combineReducers } from "redux";
import  userReducer  from "./reducers/userReducer";
import  themeReducer  from "./reducers/themeReducer";
import  languageReducer  from "./reducers/languageReducer";
import projectReducer from "./reducers/projectReducer";

const rootReducer = combineReducers({
    user:userReducer,
    theme:themeReducer,
    language:languageReducer,
    projects:projectReducer,
})
const store = createStore(rootReducer)

export default store;