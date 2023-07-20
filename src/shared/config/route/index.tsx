/* eslint-disable no-unused-vars */
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/ui/MainPage';
import { AboutPage } from 'pages/ui/AboutPage';
import { NotFoundPage } from 'pages/ui/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',

    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',

    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
