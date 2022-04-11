import React from "react";
import {TableRowProps} from "../types/table";

const changeValueRow = (event: React.ChangeEvent<HTMLInputElement>, row: TableRowProps)
    : TableRowProps => {

    const {name, value} = event.currentTarget

    return {
        ...row,
        [name]: value
    }
}

export default changeValueRow