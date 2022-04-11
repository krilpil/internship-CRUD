import {TableRowState, TableRowAction, TableRowActionTypes} from "../../types/table";

const initialState: TableRowState = {
    newRowActive: false,
    editRowActive: false,
    newRowValue: null,
    editRowValue: null
}

export const tableReducer = (state = initialState, action: TableRowAction): TableRowState => {
    switch (action.type) {
        case TableRowActionTypes.SET_ACTIVE_NEW_ROW:
            return {
                ...state,
                newRowActive: !state.newRowActive
            }
        case TableRowActionTypes.SET_ACTIVE_EDIT_ROW: {
            return {
                ...state,
                editRowActive: !state.editRowActive,
                editRowValue: action.payload
            }
        }
        default:
            return state
    }
}