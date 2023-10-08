import { createSlice } from "@reduxjs/toolkit";

export interface MusicState {
    music:{
        title:string,artist:string,image_path:string,song_path:string
    }
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