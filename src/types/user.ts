import {TableRowState} from "./table";

export interface Users {
    "_id": string,
    "data"?: {
        name: string,
        age: string,
        email: string
    } | null,
    __v: number
}

export interface UserState {
    users: Users[]
    loading: boolean
    error: null | string
}

export enum UserActionTypes {
    SET_USER = "SET_USER",
    SET_USER_SUCCESS = "SET_USER_SUCCESS",
    SET_USER_ERROR = "SET_USER_ERROR",
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_ONE_USER_SUCCESS = 'FETCH_ONE_USER_SUCCESS',
    DELETE_USER = "DELETE_USER",
    DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
    DELETE_USER_ERROR = "DELETE_USER_ERROR",
    EDIT_USER = "EDIT_USER",
    EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS",
    EDIT_USER_ERROR = "EDIT_USER_ERROR",
}

interface SetUserAction {
    type: UserActionTypes.SET_USER,
    payload: TableRowState
}

interface SetUserSuccessAction {
    type: UserActionTypes.SET_USER_SUCCESS,
    payload: Users
}

interface SetUserErrorAction {
    type: UserActionTypes.SET_USER_ERROR,
    payload: string
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: Users[]
}

interface FetchOneUserSuccessAction {
    type: UserActionTypes.FETCH_ONE_USER_SUCCESS,
    payload: Users
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

interface DeleteUserAction {
    type: UserActionTypes.DELETE_USER
}

interface DeleteUserSuccessAction {
    type: UserActionTypes.DELETE_USER_SUCCESS,
    payload: string
}

interface DeleteUserDeleteAction {
    type: UserActionTypes.DELETE_USER_ERROR,
    payload: string
}

interface EditUserAction {
    type: UserActionTypes.EDIT_USER
}

interface EditUserSuccessAction {
    type: UserActionTypes.EDIT_USER_SUCCESS,
    payload: Users
}

interface EditEditErrorAction {
    type: UserActionTypes.EDIT_USER_ERROR,
    payload: string
}


export type UserAction =
    FetchUserAction |
    FetchUserSuccessAction |
    FetchUserErrorAction |
    FetchOneUserSuccessAction |
    SetUserAction |
    SetUserSuccessAction |
    SetUserErrorAction |
    DeleteUserAction |
    DeleteUserSuccessAction |
    DeleteUserDeleteAction |
    EditUserAction |
    EditUserSuccessAction |
    EditEditErrorAction