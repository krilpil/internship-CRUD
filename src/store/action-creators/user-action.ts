import {UserAction, UserActionTypes, Users} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
import {TableRowProps} from "../../types/table";
import {BASE_URL} from "../../constants/base-url";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS,
            })
            const response = await axios.get(`${BASE_URL}/api/records`)

            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data
            })

        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: `Произошла ошибка при загрузке пользователей`
            })
        }
    }
}

export const fetchUser = (id: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS,
            })
            const response = await axios.get(`${BASE_URL}/api/records/${id}`)

            dispatch({
                type: UserActionTypes.FETCH_ONE_USER_SUCCESS,
                payload: response.data
            })

        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: `Произошла ошибка при загрузке пользователя с id: ${id}`
            })
        }
    }
}

export const setUser = (user: TableRowProps) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.SET_USER,
                payload: {
                    newRowActive: false,
                    value: user
                }
            })
            const response = await axios.put<Users>(
                `${BASE_URL}/api/records/`,
                {
                    data: user
                }
            )

            dispatch({
                type: UserActionTypes.SET_USER_SUCCESS,
                payload: response.data
            })

        } catch (e) {
            dispatch({
                type: UserActionTypes.SET_USER_ERROR,
                payload: `Произошла ошибка при создании пользователя`
            })
        }
    }
}

export const deleteUser = (id: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.DELETE_USER
            })

            await axios.delete<Users>(
                `${BASE_URL}/api/records/${id}`
            )

            dispatch({
                type: UserActionTypes.DELETE_USER_SUCCESS,
                payload: id
            })

        } catch (e) {
            dispatch({
                type: UserActionTypes.DELETE_USER_ERROR,
                payload: `Произошла ошибка при удалении пользователя`
            })
        }
    }
}

export const editUser = (user: TableRowProps) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.EDIT_USER
            })

            const response = await axios.post<Users>(
                `${BASE_URL}/api/records/${user.id}`,
                {
                    data: {
                        name: user.name,
                        age: user.age,
                        email: user.email
                    }
                }
            )

            // Очень странно что API возвращает пользователя до изменения,
            // поэтому data взял с клиента
            dispatch({
                type: UserActionTypes.EDIT_USER_SUCCESS,
                payload: {
                    _id: response.data._id,
                    data: {
                        name: user.name,
                        age: user.age,
                        email: user.email
                    },
                    __v: response.data.__v
                }
            })

        } catch (e) {
            dispatch({
                type: UserActionTypes.DELETE_USER_ERROR,
                payload: `Произошла ошибка при обновлении пользователя`
            })
        }
    }
}