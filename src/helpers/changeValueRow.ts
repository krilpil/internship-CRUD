import React from "react";
import {TableRowProps} from "../types/table";

const changeValueRow = (event: React.ChangeEvent<HTMLInputElement>, row: TableRowProps)
    : TableRowProps => {
    switch (event.currentTarget.name) {
        case 'name':
            return ({
                name: event.currentTarget.value,
                age: row.age,
                email: row.email
            })
        case 'age':
            return ({
                name: row.name,
                age: event.currentTarget.value,
                email: row.email
            })
        case 'email':
            return ({
                name: row.name,
                age: row.age,
                email: event.currentTarget.value
            })
        default:
            return row
    }
}

export default changeValueRow