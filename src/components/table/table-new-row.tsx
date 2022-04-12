import React, {useEffect, useState} from 'react';
import style from "./table.module.css";
import {useActions} from "../../hooks/useActions";
import {TableRowProps} from "../../types/table";
import changeValueRow from "../../helpers/changeValueRow";
import changeFormValid from '../../helpers/changeValidForm';

const TableNewRow: React.FC = () => {
    const {setActiveNewRowTable, setUser} = useActions()
    const [newRow, setNewRow] = useState<TableRowProps>({
        name: '',
        age: '',
        email: ''
    })

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        setFormValid(changeFormValid(newRow))
    }, [newRow])

    const removeNewTableRow = () => {
        setActiveNewRowTable()
    }

    const changeNewValueRow = (event: React.ChangeEvent<HTMLInputElement>, newRow: TableRowProps) => {
        setNewRow(changeValueRow(event, newRow))
    }

    const doneNewTableRow = () => {
        setUser(newRow)
    }

    return (
        <tr>
            <td></td>
            <td className={newRow.name.length === 0 ? style['table__input_error'] : style['table__input']}>
                <input name={'name'} onChange={event => changeNewValueRow(event, newRow)}
                       value={newRow.name} placeholder={'Введите имя...'}/>
            </td>
            <td className={newRow.age.length === 0 ? style['table__input_error'] : style['table__input']}>
                <input name={'age'} onChange={event => changeNewValueRow(event, newRow)}
                       value={newRow.age} placeholder={'Введите возраст...'}/>
            </td>
            <td className={newRow.email.length === 0 ? style['table__input_error'] : style['table__input']}>
                <input name={'email'} onChange={event => changeNewValueRow(event, newRow)}
                       value={newRow.email} placeholder={'Введите email...'}/>
            </td>
            <td className={style['table__icon-block']}>
                <input onClick={removeNewTableRow} type={'button'} title={'Отменить'} className={style['icon-remove']}/>
                <input disabled={!formValid} onClick={doneNewTableRow} type={'button'} title={'Сохранить'} className={style['icon-done']}/>
            </td>
        </tr>
    );
};

export default TableNewRow;