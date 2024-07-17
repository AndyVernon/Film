import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FilmRoutesTypes } from './FilmRoutes.types';

const FilmRoutes: React.FC<FilmRoutesTypes> = (props: FilmRoutesTypes) => {
    const routes = props.routes;

    const routeElements = routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element}/>
    ));

    return (
        <Router>
            <Routes>
                {routeElements}
            </Routes>
        </Router>
    )
};

export default FilmRoutes;