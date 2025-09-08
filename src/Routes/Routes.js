import Home from '~/Page/Home/Home';
import Following from '~/Page/Following/Following';
import NotFound from '~/Page/NotFound/NotFound';
import Profile from '~/Page/Profile/Profile';
import Upload from '~/Page/Upload/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: null },
    { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
