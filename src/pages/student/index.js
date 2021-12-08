/**
 * title: 学生列表
 * Routes: 
 *      - src/routes/privateRouter.js
 */
import React from 'react'
import SearchBarContainer from "@/components/Containers/SearchBarContainer.js"
import PagerContainer from '@/components/Containers/PagerContainer.js'
import StudentTableContainer from '@/components/Containers/StudentTableContainer.js'
import ModalContainer from '../../components/Containers/ModalContainer'

export default function index() {
    return (
        <div className="container">
            <SearchBarContainer />
            <StudentTableContainer />
            <PagerContainer />
            <ModalContainer>
                加载中...
            </ModalContainer>
        </div>
    )
}
