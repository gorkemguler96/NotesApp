import React from 'react';
import '../style/style.css'
import { useSelector, useDispatch } from 'react-redux'
import  { useState } from 'react';
import {Modal, Button, Input} from 'antd';
import { deleteNote,updateNote } from '../redux/notes/notesSlice'

function NoteTitle(props) {
    const { TextArea } = Input;
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem,setSelectedItem] =useState("")
    const showModal = (item) => {
        setIsModalVisible(true);
        setSelectedItem(item)
    };
    const hideModal = () => {
        setIsModalVisible(false)
        setSelectedItem("")
    }
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleDelete = (e) => {
        dispatch(deleteNote(e))
    };
    const allNote = useSelector((state)=>state.notes.items)
    const onSelectColor = (e,color) => {
        dispatch(updateNote({...e,color:color}))
    }

    return (
        <div>
            <Input className={"filterNote"} type="text" placeholder={"Filter Notes"}/><br/>
            {
                selectedItem &&
                <Modal
                    title={selectedItem.title}
                    visible={isModalVisible}
                    onOk={handleOk}
                    cancelButtonProps={{type:"danger"}}
                    cancelText={"Cancel"}
                    onCancel={hideModal}>
                    <p>{selectedItem.note}</p>
                    <div className={"modalColor"}>
                        <button type={"button"} onClick={()=>onSelectColor(selectedItem,"rgba(46,204,113,1)")} style={{background:"rgba(46,204,113,1)"}} />
                        <button type={"button"} onClick={()=>onSelectColor(selectedItem,"rgba(24,144,255,1)")} style={{background:"rgba(24,144,255,1)"}} />
                        <button type={"button"} onClick={()=>onSelectColor(selectedItem,"rgba(241,196,15,1)")} style={{background:"rgba(241,196,15,1)"}} />
                        <button type={"button"} onClick={()=>onSelectColor(selectedItem,"rgba(231,76,60,1)")} style={{background:"rgba(231,76,60,1)"}}  />
                    </div>
                </Modal>
            }
            {allNote.map((item)=>{
                return (
                    <div key={item.id}>
                        <div className={"modal"}>
                            <Button style={{backgroundColor:item.color,borderColor:item.color}} type="primary" onClick={()=>showModal(item)}>
                                {item.title}
                            </Button>
                            <Button type="danger" onClick={()=>handleDelete(item)}>
                                X
                            </Button>


                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default NoteTitle;
