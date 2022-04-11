import React from 'react';
import style from './table.module.css'
import TableRow from "./table-row";
import {TableProps} from "../../types/table";
import TableNewRow from "./table-new-row";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TableEditRow from "./table-edit-row";

const Table: React.FC<TableProps> = ({users}) => {
    const {newRowActive, editRowActive, editRowValue} = useTypedSelector(state => state.table)

    const dataValidation = () => {
        if (typeof users[0] === 'object') {
            return users.map((user, index) => {
                if (editRowActive && editRowValue!.id === user._id) {
                    return (
                        <TableEditRow
                            key={index}
                            id={user._id}
                            name={user.data?.name ?? 'Н/Д'}
                            age={user.data?.age ?? 'Н/Д'}
                            email={user.data?.email ?? 'Н/Д'}
                        />
                    )
                } else {
                    return (
                        <TableRow
                            key={index}
                            id={user._id}
                            name={user.data?.name ?? 'Н/Д'}
                            age={user.data?.age ?? 'Н/Д'}
                            email={user.data?.email ?? 'Н/Д'}
                        />
                    )
                }
            })
        } else {
            return (
                <tr><td className={style['table__not-found']}>Записей не найдено</td></tr>
            )
        }
    }

    return (
        <table className={style['table']}>
            <thead>
            <tr className={style['table__head']}>
                <th>ID</th>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Email</th>
                <th>Действие</th>
            </tr>
            </thead>
            <tbody className={style['table__body']}>

            {newRowActive ? <TableNewRow/> : null}

            {dataValidation()}

            </tbody>
        </table>
    )
}

export default Table