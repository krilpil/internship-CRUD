import React, {useEffect} from 'react';
import Table from "../components/table/table";
import TablePanel from "../components/table-panel/table-panel";
import style from "./table-page.module.css"
import TableSearch from "../components/table-search/table-search";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/loading/loading";
import {useActions} from "../hooks/useActions";

const TablePage = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={style['table-page']}>
            <div className={style['table']}>
                <TableSearch/>
                <TablePanel/>
                <Table users={users}/>
            </div>
        </div>
    );
};

export default TablePage;