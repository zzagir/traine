import { createSlice } from "@reduxjs/toolkit";

const initialState: object[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const recipeId = action.payload;
    },
  },
});
