import {combineReducers} from "redux";
import {userReducer} from "./user-reducer";
import {tableReducer} from "./table-reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    table: tableReducer
})

export type RootState = ReturnType<typeof rootReducer>