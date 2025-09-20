import Home from '~/Page/Home/Home';
import Following from '~/Page/Following/Following';
import NotFound from '~/Page/NotFound/NotFound';
import Profile from '~/Page/Profile/Profile';
import Upload from '~/Page/Upload/Upload';
import Login from '~/Page/Login/Login';
import Live from '~/Page/Live/Live';
import TikTokStudios from '~/Page/TikTokStudios/TikTokStudios';
import CreateTikTokEffects from '~/Page/CreateTikTokEffects/CreateTikTokEffects';
import SellOnTikTokShop from '~/Page/SellOnTikTokShop/SellOnTikTokShop';
import Feedback from '~/Page/Feedback/Feedback';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/explore', component: Following, layout: null },
    { path: '/following', component: Following, layout: null },
    { path: '/upload', component: Upload, layout: null },
    { path: '/live', component: Live, layout: null },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload },
    { path: '/login', component: Login, layout: null },
    { path: '/tiktokstudio', component: TikTokStudios, layout: null },
    { path: '/createtiktokeffects', component: CreateTikTokEffects, layout: null },
    { path: '/sellontiktokshop', component: SellOnTikTokShop, layout: null },
    { path: '/feedback', component: Feedback, layout: null },
    { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
