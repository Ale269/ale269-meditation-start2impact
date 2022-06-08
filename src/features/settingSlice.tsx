import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    song: localStorage.getItem("choosenSong") || "",
    time: Number(localStorage.getItem("choosenTimer")) || 1,
  },
};

interface SongAction {
  payload: string;
}

interface TimeAction {
  payload: number;
}

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSong: (state, action: SongAction) => {
      state.value.song = action.payload;
    },
    setTimer: (state, action: TimeAction) => {
      state.value.time = action.payload;
    },
  },
});

export default settingSlice.reducer;

export const { setSong, setTimer } = settingSlice.actions;
