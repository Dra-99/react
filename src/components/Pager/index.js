import React from 'react'
import "./index.css"
export default function Pager(props) {

    /**
     * 我们可以从父组件中得到
     * total : 数据总量
     * limit : 每页显示的条数
     * current: 当前显示的页数
     * pageSize: 最多显示的页数
     */

    // 由数据总量和每页显示的条数我们可以得到页码数
    const pageTotal = getPageTotal(props);
    const minPage = getMinPage(props);
    const maxPage = getMaxPage(minPage, props, pageTotal);

    const spanArr = [];

    for(let i = minPage; i <= maxPage; i++) {
        spanArr.push(<span key={i} className={props.current === i ? "active" : ""} onClick={() => {
            changePage(i, props);
        }}>{i}</span>)
    }

    return (
        <>
            <span className={props.current === 1 ? "disabled" : ""} onClick={() => {
                changePage(1, props)
            }}>首页</span>      
            <span className={props.current === 1 ? "disabled" : ""} onClick={() => {
                changePage(props.current - 1, props)
            }}>上一页</span>
            {spanArr}
            <span className={props.current === pageTotal ? "disabled" : ""} onClick={() => {
                changePage(props.current + 1, props)
            }}>下一页</span>
            <span className={props.current === pageTotal ? "disabled" : ""} onClick={() => {
                changePage(pageTotal, props)
            }}>尾页</span>
            {props.current} / {pageTotal}
        </>
    )
}

function getPageTotal(props) {
    return Math.ceil(props.total / props.limit);
}

function getMinPage(props) {
    let result = props.current - Math.floor(props.pageSize / 2);
    if(result < 0) {
        result = 1;
    }
    return result;
}

function getMaxPage(min, props, pageTotal) {
    let result = min + props.pageSize - 1;
    if(result > pageTotal) {
        result = pageTotal;
    }
    return result;
}


function changePage(target, props) {
    if(target === props.current) {
        return;
    }
    if(target <= 0 || target > getPageTotal(props)) {
        return;
    }
    props.handlePageChange && props.handlePageChange(target);
}