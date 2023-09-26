import { createSlice } from "@reduxjs/toolkit";

export interface MusicState {
    music:Object
}

const initialState:MusicState = {
    music:{
        title:'Dil Galti Kar baitha',artist:'Jubin',image_path:'images-Di-Galti-Kar',song_path:'songs-Di-%20Galti-Kar'
    }
}

export const musicSlice = createSlice({
    name:"music",
    initialState,
    reducers:{
        setMusidData(state,action){
            state.music = action.payload
        }
    }
})


export const { setMusidData } = musicSlice.actions;

export default musicSlice.reducer;