import React from 'react';
import FilmRoutes from './Routes/FilmRoutes';
import { FilmRouteType } from './Routes/FilmRoutes.types';
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

const App: React.FC = () => {

  const routes: FilmRouteType[] = [
    { path: '/', element: <HomePage /> },
    { path: '/details', element: <DetailsPage />}
  ]

  return (
    <FilmRoutes routes={routes}/>
  );
};

export default App;


