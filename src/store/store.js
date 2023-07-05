import Homeslice from './homeSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		Home: Homeslice,
	},
});

export default store;
