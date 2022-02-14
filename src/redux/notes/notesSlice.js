import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        id:1,
        title:"Redux",
        note:"Learning react"
    },
    reducers: {

    },
});

export const {} = notesSlice.actions
export default notesSlice.reducer;
