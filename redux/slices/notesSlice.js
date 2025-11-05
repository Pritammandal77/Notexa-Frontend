const { createSlice } = require("@reduxjs/toolkit");


const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        allNotes: null,
    },
    reducers: {
        setAllNotes: (state, action) => {
            state.allNotes = action.payload;
        }
    }
})

export const { setAllNotes } = notesSlice.actions;
export default notesSlice.reducer;