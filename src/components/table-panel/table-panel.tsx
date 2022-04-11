import React from 'react';
import style from './table-panel.module.css'
import {useActions} from "../../hooks/useActions";

const TablePanel = () => {
    const {setActiveNewRowTable, fetchUsers} = useActions()

    const newTableRow = () => {
        setActiveNewRowTable()
    }

    const updateUsers = () => {
        fetchUsers()
    }

    return (
        <form className={style['table-panel']}>
            <input onClick={updateUsers} type={'button'} value={'Получить все записи'}/>
            <input onClick={newTableRow} type={'button'} value={'Создать новую запись'}/>
        </form>
    );
};

export default TablePanel;