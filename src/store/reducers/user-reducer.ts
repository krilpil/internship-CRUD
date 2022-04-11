import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                users: [],
                loading: true,
                error: null,
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: null,
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                users: [],
                loading: false,
                error: action.payload,
            }
        case UserActionTypes.FETCH_ONE_USER_SUCCESS:
            return {
                users: [action.payload],
                loading: false,
                error: null,
            }
        case UserActionTypes.SET_USER:
            return {
                users: state.users,
                loading: true,
                error: null,
            }
        case UserActionTypes.SET_USER_SUCCESS:
            return {
                users: [...state.users, action.payload],
                loading: false,
                error: null,
            }
        case UserActionTypes.SET_USER_ERROR:
            return {
                users: [],
                loading: false,
                error: action.payload,
            }
        case UserActionTypes.DELETE_USER:
            return {
                users: state.users,
                loading: true,
                error: null,
            }
        case UserActionTypes.DELETE_USER_SUCCESS:
            const newList = state.users.filter(user => user._id !== action.payload)
            return {
                ...state,
                users: newList,
                loading: false,
                error: null,
            }
        case UserActionTypes.DELETE_USER_ERROR:
            return {
                users: state.users,
                loading: false,
                error: action.payload,
            }
        case UserActionTypes.EDIT_USER: {
            return {
                users: state.users,
                loading: true,
                error: null
            }
        }
        case UserActionTypes.EDIT_USER_SUCCESS: {
            const newList = state.users.map(user => {
                if (user._id === action.payload._id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {
                ...state,
                users: newList,
                loading: false,
                error: null
            }
        }
        default:
            return state
    }
}