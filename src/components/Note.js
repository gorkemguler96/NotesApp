import React from 'react';
import '../style/style.css'
import NoteTitle from "./NoteTitle";
import { useSelector, useDispatch } from 'react-redux'
import { arttir } from '../redux/notes/notesSlice'


function Note(props) {


    return (
        <form className={"note"}>
            <input placeholder={"Note Title"} className={"noteTitle"} type="text"/>
            <textarea maxLength={200}  placeholder={"Enter your note here..."} className={"textArea"} ></textarea>
            <span className={"btn-group"}>
                <button style={{background:"rgba(46,204,113,1)"}} />
                <button style={{background:"rgba(24,144,255,1)"}} />
                <button style={{background:"rgba(241,196,15,1)"}} />
                <button style={{background:"rgba(231,76,60,1)"}}  />
                <input className={"submit"} value={"Submit"}  type="submit"/>
            </span>
            <NoteTitle/>
        </form>
    );
}

export default Note;
