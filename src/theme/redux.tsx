import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { theme } from "./theme";

type themeStateType = {
  theme: theme;
  color1: string;
  color2: string;
};

export const initialState: themeStateType = {
  theme: "light",
  color1: "#ff0000",
  color2: "#00ff00",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setColor: (
      state,
      action: PayloadAction<{ whichColor: "color1" | "color2"; color: string }>
    ) => {
      state[action.payload.whichColor] = action.payload.color;
    },
  },
});

export const store = configureStore({
  reducer: { theme: themeSlice.reducer },
});

export const { toggleTheme, setColor } = themeSlice.actions;
export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export type theme = "light" | "dark";
export default themeSlice.reducer;
