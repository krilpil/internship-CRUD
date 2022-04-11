import {TableRowAction, TableRowActionTypes} from "../../types/table";

export const setActiveNewRowTable = (): TableRowAction => {
    return {
        type: TableRowActionTypes.SET_ACTIVE_NEW_ROW
    }
}

export const setActiveEditRowTable = (id: string): TableRowAction => {
    return {
        type: TableRowActionTypes.SET_ACTIVE_EDIT_ROW,
        payload: {
            name: '',
            age: '',
            email: '',
            id: id
        }
    }
}

