import { fetchUserAlbums } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlbum } from '../../models/IAlbum';

interface AlbumState {
  albums: IAlbum[];
  isLoading: boolean;
  error: string;
}

const initialState: AlbumState = {
  albums: [],
  isLoading: false,
  error: '',
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    clearAlbums(state) {
      state.albums = [];
    },
  },
  extraReducers: {
    [fetchUserAlbums.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserAlbums.fulfilled.type]: (
      state,
      action: PayloadAction<IAlbum[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.albums = action.payload;
    },
    [fetchUserAlbums.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default albumSlice.reducer;
