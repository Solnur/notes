import App from 'src/App';
import Home from 'src/pages/home';
import Login from 'src/pages/login/login';

export const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/login',
                exact: true,
                component: Login
            }
        ]
    }
];
