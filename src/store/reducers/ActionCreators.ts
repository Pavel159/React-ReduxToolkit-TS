import { IPost } from '../../models/IPost';
import axios from 'axios';
import { IUser } from '../../models/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAlbum } from '../../models/IAlbum';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error...');
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  'posts/fetchAll',
  async (id: any, thunkAPI) => {
    try {
      const response = await axios.get<IPost[]>(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error...');
    }
  }
);

export const fetchUserAlbums = createAsyncThunk(
  'albums/fetchAll',
  async (id: any, thunkAPI) => {
    try {
      const response = await axios.get<IAlbum[]>(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error...');
    }
  }
);
