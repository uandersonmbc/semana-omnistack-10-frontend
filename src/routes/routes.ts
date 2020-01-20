import Login from '../components/Login';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import Register from '../components/Register';
import Home from '../components/Home';

export const privateRoutes = [
    {
        path: '/profile',
        exact: true,
        permissions: ['authenticated'],
        redirect: '/login',
        component: Profile,
    },
    {
        path: '/editprofile',
        exact: true,
        permissions: ['authenticated'],
        redirect: '/login',
        component: EditProfile,
    },
];

export const publicRoutes = [
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/register',
        exact: true,
        component: Register,
    },
];
