import React, {useState} from 'react';
import style from "./table.module.css";
import {TableRowProps} from "../../types/table";
import changeValueRow from "../../helpers/changeValueRow";
import {useActions} from "../../hooks/useActions";

const TableEditRow: React.FC<TableRowProps> = ({name, age, email, id}) => {
    const {setActiveEditRowTable, editUser} = useActions()
    const [editRow, setEditRow] = useState<TableRowProps>({
        name: name,
        age: age,
        email: email
    })

    const changeNewValueRow = (event: React.ChangeEvent<HTMLInputElement>, newRow: TableRowProps) => {
        setEditRow(changeValueRow(event, newRow))
    }

    const removeEditTableRow = (id: string) => setActiveEditRowTable(id)
    const doneEditTableRow = (id: string) => {
        editUser({
            name: editRow.name,
            age: editRow.age,
            email: editRow.email,
            id: id
        })
        setActiveEditRowTable(id)
    }

    return (
        <tr>
            <td>{id}</td>
            <td>
                <input name={'name'} value={editRow.name} className={style['table__input']}
                       onChange={event => changeNewValueRow(event, editRow)} placeholder={'Введите имя...'}/>
            </td>
            <td>
                <input name={'age'} value={editRow.age} className={style['table__input']}
                       onChange={event => changeNewValueRow(event, editRow)} placeholder={'Введите возраст...'}/>
            </td>
            <td>
                <input name={'email'} value={editRow.email} className={style['table__input']}
                       onChange={event => changeNewValueRow(event, editRow)} placeholder={'Введите email...'}/>
            </td>
            <td className={style['table__icon-block']}>
                <input onClick={() => removeEditTableRow(id!)} type={'button'} title={'Отменить'}
                       className={style['icon-remove']}/>
                <input onClick={() => doneEditTableRow(id!)} type={'button'} title={'Сохранить'}
                       className={style['icon-done']}/>
            </td>
        </tr>
    );
};

export default TableEditRow;