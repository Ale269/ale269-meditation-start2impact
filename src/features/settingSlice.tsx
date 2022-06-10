import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    song: localStorage.getItem("choosenSong") || 0,
    time: Number(localStorage.getItem("choosenTime")) || 1,
  },
};

interface SongAction {
  payload: number;
}

interface TimeAction {
  payload: number;
}

export const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSong: (state, action: SongAction) => {
      return {
        value: {
          ...state.value,
          song: action.payload,
        },
      };
    },
    setTimer: (state, action: TimeAction) => {
      return {
        value: {
          ...state.value,
          time: action.payload,
        },
      };
    },
  },
});

export default settingSlice.reducer;

export const { setSong, setTimer } = settingSlice.actions;
