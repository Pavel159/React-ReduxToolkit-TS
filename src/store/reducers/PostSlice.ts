import { fetchUserPosts } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../models/IPost';

interface PostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserPosts.fulfilled.type]: (
      state,
      action: PayloadAction<IPost[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload;
    },
    [fetchUserPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
