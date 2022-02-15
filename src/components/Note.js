import React, {useState} from 'react';
import '../style/style.css'
import NoteTitle from "./NoteTitle";
import { useSelector, useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice'
import { Input ,Button} from 'antd';


function Note(props) {
    const [noteTitle,setNoteTitle] = useState("")
    const [textArea,setTextArea] = useState("")
    const [color,setColor] = useState("")
    const dispatch =useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(noteTitle.length && textArea.length){
            const date = new Date().getTime();
            dispatch(addNote({id:date, title:noteTitle, note:textArea ,color}))
            setNoteTitle("")
            setTextArea("")
        }
    }
    const onSelectColor = (e) => {
        setColor(e)
    }
    const { TextArea } = Input;

    return (
        <form className={"note"}>
            <Input
                value={noteTitle}
                onChange={(e)=>setNoteTitle(e.target.value)}
                placeholder={"Note Title"}
                className={"noteTitle"}
                type="text" />

            <TextArea
                showCount
                maxLength={200}
                placeholder={"Enter your note here..."}
                className={"textArea"}
                value={textArea}
                onChange={(e)=>setTextArea(e.target.value)}
            >
            </TextArea>
            <span className={"btn-group"}>
                <button type={"button"} onClick={()=>onSelectColor("rgba(46,204,113,1)")} style={{background:"rgba(46,204,113,1)"}} />
                <button type={"button"} onClick={()=>onSelectColor("rgba(24,144,255,1)")} style={{background:"rgba(24,144,255,1)"}} />
                <button type={"button"} onClick={()=>onSelectColor("rgba(241,196,15,1)")} style={{background:"rgba(241,196,15,1)"}} />
                <button type={"button"} onClick={()=>onSelectColor("rgba(231,76,60,1)")} style={{background:"rgba(231,76,60,1)"}}  />
                <Button  className={"submit"} onClick={handleSubmit} value={"Submit"}  type="submit">Submit</Button>
            </span>
            <NoteTitle/>
        </form>
    );
}

export default Note;
