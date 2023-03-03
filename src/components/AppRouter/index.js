import { Routes, Route } from 'react-router-dom';
import { routes } from '../../routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
