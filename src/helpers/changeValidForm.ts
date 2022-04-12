import { TableRowProps } from "../types/table"

const changeFormValid = (row: TableRowProps): boolean => {
    return (row.name.length === 0 || row.age.length === 0 || row.email.length === 0) ?
        false : true
}

export default changeFormValid