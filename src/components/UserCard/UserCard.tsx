import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../models/IUser';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserAlbums } from '../../store/reducers/ActionCreators';
import { albumSlice } from '../../store/reducers/AlbumSlice';
import cl from './UserCard.module.css';

const UserCard: React.FC<IUser> = ({ id, name, email, phone }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { clearAlbums } = albumSlice.actions;
  const { albums, isLoading, error } = useAppSelector(
    (state) => state.albumReducer
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {
    dispatch(fetchUserAlbums(id));
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
    dispatch(clearAlbums());
  };

  return (
    <div className={cl.userCard}>
      <h2>{name}</h2>
      <h3>{email}</h3>
      <p>{phone}</p>
      <Button onClick={() => navigate('/posts/' + id)} variant='contained'>
        Posts
      </Button>
      <Button onClick={handleOpen} variant='contained'>
        Albums
      </Button>

      <ModalWindow open={isModalOpen} handleClose={handleClose}>
        <h2>{name}'s albums:</h2>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {albums &&
          albums.map((album) => (
            <div key={album.id}>
              <h3>
                {album.id} {album.title}
              </h3>
            </div>
          ))}
      </ModalWindow>
    </div>
  );
};

export default UserCard;
