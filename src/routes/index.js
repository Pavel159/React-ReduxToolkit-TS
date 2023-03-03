import UserPostsPage from '../pages/UserPostsPage';
import UsersPage from '../pages/UsersPage';

export const routes = [
  { path: '/', element: <UsersPage />, exact: true },
  { path: '/posts/:id', element: <UserPostsPage />, exact: true },
  { path: '/*', element: <UsersPage />, exact: true },
];
