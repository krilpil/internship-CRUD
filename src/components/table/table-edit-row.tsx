import React, {useEffect, useState} from 'react';
import style from "./table.module.css";
import {TableRowProps} from "../../types/table";
import changeValueRow from "../../helpers/changeValueRow";
import {useActions} from "../../hooks/useActions";
import changeFormValid from '../../helpers/changeValidForm';

const TableEditRow: React.FC<TableRowProps> = ({name, age, email, id}) => {
    const {setActiveEditRowTable, editUser} = useActions()
    const [editRow, setEditRow] = useState<TableRowProps>({
        name: name,
        age: age,
        email: email
    })

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        setFormValid(changeFormValid(editRow))
    }, [editRow])

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
            <td className={editRow.name.length === 0 ? style['table__input_error'] : style['table__input']}>
                <input name={'name'} value={editRow.name}
                       onChange={event => changeNewValueRow(event, editRow)}
                       placeholder={'Введите имя...'}/>
            </td>
            <td className={editRow.age.length === 0 ? style['table__input_error'] : style['table__input']}>
                <input name={'age'} value={editRow.age}
                       onChange={event => changeNewValueRow(event, editRow)}
                       placeholder={'Введите возраст...'}/>
            </td>
            <td className={editRow.email.length === 0 ? style['table__input_error'] : style['table__input']}>
                <input name={'email'} value={editRow.email}
                       onChange={event => changeNewValueRow(event, editRow)}
                       placeholder={'Введите email...'}/>
            </td>
            <td className={style['table__icon-block']}>
                <input onClick={() => removeEditTableRow(id!)} type={'button'} title={'Отменить'}
                       className={style['icon-remove']}/>
                <input disabled={!formValid} onClick={() => doneEditTableRow(id!)} type={'button'} title={'Сохранить'}
                       className={style['icon-done']}/>
            </td>
        </tr>
    );
};

export default TableEditRow;