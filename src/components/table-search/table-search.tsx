import React, {useState} from 'react';
import style from "./table-search.module.css";
import {useActions} from "../../hooks/useActions";

const TableSearch = () => {
    const [query, setQuery] = useState<string>('')
    const {fetchUser} = useActions()

    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const buttonSearch = async () => {
        await fetchUser(query)
    }

    return (
        <div className={style['table-search']}>
            <input onChange={search} value={query} className={style['search-input']} type={'search'}
                   placeholder={'Введите ID записи...'}/>
            <input onClick={buttonSearch} type={'button'} value={'Поиск!'}/>
        </div>
    );
};

export default TableSearch;