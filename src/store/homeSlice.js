import { createSlice } from '@reduxjs/toolkit';

const Homeslice = createSlice({
	name: 'Home',
	initialState: {
		url: {},
		genres: {},
	},
	reducers: {
		getapiconfiguration: (state, action) => {
			state.url = action.payload;
		},
		getgenres: (state, action) => {
			state.genres = action.payload;
		},
	},
});

export const { getapiconfiguration, getgenres } = Homeslice.actions;

export default Homeslice.reducer;
