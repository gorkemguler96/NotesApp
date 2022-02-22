import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [{
            id: new Date().getTime(),
            title: "Redux",
            note: "Learning react",
            color: "rgba(46,204,113,1)"
        }]
    },
    reducers: {
        addNote:(state,action) => {
            state.items.push(action.payload)

        },
        updateNote: (state,action)=> {
            const {id,color,title,note} = action.payload
           const temp= state.items.filter((item)=>item.id === id)
            temp.color = color
            temp.title = title
            temp.note = note
            temp.id = id
            const tempItems = state.items.filter((item)=>item.id !== id)
            state.items=tempItems
            tempItems.push(temp)
            state.items=tempItems
            console.log(state)
        },

        filteredNotes: (state,action) => {
            const {id,color,title,note} = action.payload

                const temp = state.items.filter((item)=>item.title.toLowerCase().trim().includes(title.toLocaleLowerCase().trim()))
                return temp


        },

        deleteNote: (state,action)=> {
            state.items = state.items.filter((item)=>item.id !== action.payload.id)
        }
    },
});

export const {addNote,deleteNote,updateNote,filteredNotes} = notesSlice.actions
export default notesSlice.reducer;
