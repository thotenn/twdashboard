import React from "react";
import env from "./env";

export const publicRoutes = [
    // {
    //     path: env.URLS.public.clases,
    //     exact: true,
    //     component: React.lazy(() => import('./public/views/Clases/Clases.js')),
    // },
];

export const publicRedirectsRoutes = [{
        path: env.URLS.home,
        exact: true,
        component: React.lazy(() =>
            import ('./views/Home/Home.js')),
    },
    {
        path: '*',
        exact: true,
        redirect: env.URLS.error.notFound
    },
]