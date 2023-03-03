import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post/Post';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchUserPosts } from '../store/reducers/ActionCreators';

const UserPostsPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    dispatch(fetchUserPosts(id));
  }, []);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!posts.length ? <h1>This user has no posts</h1> : <h1>Posts:</h1>}
      <div className='posts'>
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
      </div>
    </div>
  );
};

export default UserPostsPage;
