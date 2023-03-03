import React, { useEffect } from 'react';
import UserCard from '../components/UserCard/UserCard';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchUsers } from '../store/reducers/ActionCreators';

const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <div className='users'>
        {users &&
          users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          ))}
      </div>
    </div>
  );
};

export default UsersPage;
