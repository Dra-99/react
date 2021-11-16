import React, {useEffect, useState} from 'react'
import {getStudentPage} from '../../service/getStudent'

export default function useGetStudent(page, limit) {

    let [data, setData] = useState([])
    let [count, setCount] = useState(0)

    useEffect(() => {
        (async () => {
            const stus = await getStudentPage(page, limit);
            setData(stus.findByPage);
            setCount(stus.cont);
        })()
    }, [page, limit]);

    return {
        data,
        count,
    };
}
