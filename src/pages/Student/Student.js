import React, {useEffect, useState} from 'react'
import SearchStudentBar from '../../components/SearchStudentBar/index'
import { searchStudent } from '../../service/getStudent'
import StudentTable from '../../components/StudentTable'
import qs from 'query-string'
import Pager from '../../components/Pager/index'

function getSearch(search) {
    const defaultVal = {
        page: 1,
        limit: 10,
        key: "",
        sex: -1
    }
    let query = qs.parse(search);
    query = Object.assign({}, defaultVal, query);
    query.page = +query.page;
    query.limit = +query.limit;
    query.sex = +query.sex;
    return query;
}

function useStudent(query) {
    const [student, setStudent] = useState({
        cont: 0,
        datas: []
    })
    useEffect(() => {
        searchStudent({
            page: query.page,
            limit: query.limit,
            key: query.key,
            sex: query.sex
        }).then(res => {
            setStudent(res);
        })
    }, [query.page, query.limit, query.key, query.sex]);
    return student;
}

function getStudentAgain(search, history) {
    const searchParams = qs.stringify(search);
    history.push("?"+searchParams);
}

export default function Student(props) {
    const query = getSearch(props.location.search)
    const resp = useStudent(query);

    return (
        <div>
            <SearchStudentBar defaultVal={{
                key: query.key,
                sex: query.sex
            }} onSearch={(e) => {
                const newSearch = {
                    ...query,
                    key: e.key,
                    sex: e.sex,
                    page: 1
                }
                getStudentAgain(newSearch, props.history);
            }}></SearchStudentBar>
            <StudentTable stuArr={resp.datas} />
            <Pager
                current={query.page}
                total={resp.cont}
                limit={query.limit}
                pageSize={5}
                handlePageChange={newPage => {
                    const newSearch = {
                        ...query,
                        page: newPage
                    }
                    getStudentAgain(newSearch, props.history);
                }}
                />
        </div>
    )
}
