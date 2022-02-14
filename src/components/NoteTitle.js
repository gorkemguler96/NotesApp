import React from 'react';
import '../style/style.css'
import { useSelector, useDispatch } from 'react-redux'
import  { useState } from 'react';
import { Modal, Button } from 'antd';

function NoteTitle(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const title = useSelector((state)=>state.notes.title)

    return (
        <div>
            <input className={"filterNote"} type="text" placeholder={"Filter Notes"}/><br/>
            <>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </>
        </div>
    );
}

export default NoteTitle;
