import React from 'react';
import style from './table.module.css';
import {TableRowProps} from "../../types/table";
import {useActions} from "../../hooks/useActions";

const TableRow: React.FC<TableRowProps> = ({name, age, email, id}) => {
    const {deleteUser, setActiveEditRowTable} = useActions()

    const deleteRow = () => {
        deleteUser(id!)
    }

    const editRow = () => {
        setActiveEditRowTable(id!)
    }

    return (
        <tr>
            <td title={id}>{id}</td>
            <td title={name}>{name}</td>
            <td title={age}>{age}</td>
            <td title={email}>{email}</td>
            <td>
                <input onClick={editRow} type={'button'} title={'Редактировать'} className={style['icon-edit']}/>
                <input onClick={deleteRow} type={'button'} title={'Удалить'} className={style['icon-delete']}/>
            </td>
        </tr>
    )
};

export default TableRow;