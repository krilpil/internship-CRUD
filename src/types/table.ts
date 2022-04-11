import {Users} from "./user";

export type TableRowProps = {
    name: string,
    age: string,
    email: string,
    id?: string
}

export type TableProps = {
    users: Users[]
}

export type TableRowState = {
    newRowActive?: boolean,
    newRowValue?: TableRowProps | null
    editRowActive?: boolean,
    editRowValue?: TableRowProps | null
}

export enum TableRowActionTypes {
    SET_ACTIVE_NEW_ROW = "SET_ACTIVE_NEW_ROW",
    SET_ACTIVE_EDIT_ROW = "SET_ACTIVE_EDIT_ROW"
}

interface SetActiveNewRowAction {
    type: TableRowActionTypes.SET_ACTIVE_NEW_ROW
}

interface setActiveEditRowAction {
    type: TableRowActionTypes.SET_ACTIVE_EDIT_ROW,
    payload: TableRowProps
}

export type TableRowAction =
    SetActiveNewRowAction |
    setActiveEditRowAction