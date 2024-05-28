
//## los slices son estados globales.
//## este es el estado goblal del entrenador trainer
import { createSlice } from '@reduxjs/toolkit';
export const trainerSlice = createSlice({

    //#nombre del estado obio no! de aca se llama
    name: 'trainer',

    // el estado inicial se daja vacio. 
    initialState: '',
    reducers: {
        setTrainer:( state, action ) => action.payload
    }
})
export const { setTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;