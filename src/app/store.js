import { configureStore } from '@reduxjs/toolkit';
import folderSlice from '../features/folderStructure/folderSlice';

export const store = configureStore({
  reducer: {
    folder : folderSlice.reducer,
  },
});
