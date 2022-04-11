import React, {useState} from 'react';
import style from "./table.module.css";
import {useActions} from "../../hooks/useActions";
import {TableRowProps} from "../../types/table";
import changeValueRow from "../../helpers/changeValueRow";

const TableNewRow: React.FC = () => {
    const {setActiveNewRowTable, setUser} = useActions()
    const [newRow, setNewRow] = useState<TableRowProps>({
        name: '',
        age: '',
        email: ''
    })

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
            <td>
                <input name={'name'} onChange={event => changeNewValueRow(event, newRow)}
                       className={style['table__input']}
                       value={newRow.name} placeholder={'Введите имя...'}/>
            </td>
            <td>
                <input name={'age'} onChange={event => changeNewValueRow(event, newRow)}
                       className={style['table__input']}
                       value={newRow.age} placeholder={'Введите возраст...'}/>
            </td>
            <td><input name={'email'} onChange={event => changeNewValueRow(event, newRow)}
                       className={style['table__input']}
                       value={newRow.email} placeholder={'Введите email...'}/>
            </td>
            <td className={style['table__icon-block']}>
                <input onClick={removeNewTableRow} type={'button'} title={'Отменить'} className={style['icon-remove']}/>
                <input onClick={doneNewTableRow} type={'button'} title={'Сохранить'} className={style['icon-done']}/>
            </td>
        </tr>
    );
};

export default TableNewRow;