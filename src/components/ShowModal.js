import Modal from "./Modal";
import React from 'react'

export default function ShowModal(props) {
    return (
        <>
            {props.show ? <Modal {...props}></Modal> : ""}
        </>
    )
}

