import React from "react";

export interface FilmRoutesTypes {
    routes: FilmRouteType[];
}

export interface FilmRouteType {
    path: string;
    element: React.ReactNode;
}