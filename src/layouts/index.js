import React from 'react'
import Layout from "../components/Layout"
import HeaderContainer from "../components/Containers/HeaderContainer"
import Menu from "../components/Menu"

export default function index(props) {
    if(props.location.pathname === "/login") {
        return props.children
    }else {
        return <Layout
            header={<HeaderContainer />}
            left={<Menu />}
            right={props.children}
        />
    }
}
