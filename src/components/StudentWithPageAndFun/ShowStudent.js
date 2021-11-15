import React, {useState, useEffect} from 'react'
import StudentList from './StudentList'
import { getStudentPage } from '../../service/getStudent'
import Pager from '../Pager';

export default function ShowStudent() {

    let [studentData, setStudentData] = useState([]);
    let [total, setTotal] = useState(0);
    let [limit, setLimit] = useState(10);
    let [current, setCurrent] = useState(1);
    let [pageSize, setPageSize] = useState(5);


    useEffect(() => {
        (async () => {
            const result = await getStudentPage(current, limit);
            setStudentData(result.findByPage);
            setTotal(result.cont);
        })()
    }, [current, limit, pageSize])

    return (
        <div>
            <StudentList studentArr={studentData} />
            <Pager current={current} total={total} limit={limit} pageSize={pageSize} handlePageChange={(newPage) => {
                setCurrent(newPage)
            }} />
            <div style={{
                marginTop: 30
            }}>
            设置每页显示的条数<input value={limit} type="number" onChange={e => {
                setLimit(parseInt(e.target.value))
            }} />
            </div>
            <div>
                设置每页显示的页码数
                <input type="number" value={pageSize} onChange={e => {
                    setPageSize(parseInt(e.target.value))
                }} />
            </div>
        </div>
    )
}
