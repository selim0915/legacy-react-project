import HomePage from "./components/Nobd/Blog/pages/HomePage";
import ListPage from "./components/Nobd/Blog/pages/ListPage";
import ShowPage from "./components/Nobd/Blog/pages/ShowPage";
import CreatePage from "./components/Nobd/Blog/pages/CreatePage";
import EditPage from "./components/Nobd/Blog/pages/EditPage";
import AdminPage from "./components/Nobd/Blog/pages/AdminPage";
import NotFoundPage from "./components/Nobd/Blog/pages/NotFoundPage";

const routes = [
    {
        path: '/blog',
        component: ListPage
    },
    {
        path: '/blog/home',
        component: HomePage
    },
    {
        path: '/blog/admin',
        component: AdminPage,
        auth: true
    },
    {
        path: '/blog/create',
        component: CreatePage,
        auth: true
    },
    {
        path: '/blog/:id',
        component: ShowPage
    }, // TODO : :id는 맨 아래 있어야만 하나 ?
    {
        path: '/blog/:id/edit',
        component: EditPage,
        auth: true
    },
    {
        path: '*',
        component: NotFoundPage
    },
];

export default routes;