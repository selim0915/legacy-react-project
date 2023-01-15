import Diary from "./components/Mypage/Diary/Diary";
import UserList from "./components/User/pages/UserList";
import UserView from "./components/User/pages/UserView";
import UserCreate from "./components/User/pages/UserCreate";
import UserEdit from "./components/User/pages/UserEdit";
import HomePage from "./components/Nobd/Blog/pages/HomePage";
import ListPage from "./components/Nobd/Blog/pages/ListPage";
import ShowPage from "./components/Nobd/Blog/pages/ShowPage";
import CreatePage from "./components/Nobd/Blog/pages/CreatePage";
import EditPage from "./components/Nobd/Blog/pages/EditPage";
import AdminPage from "./components/Nobd/Blog/pages/AdminPage";
import NotFoundPage from "./components/Nobd/Blog/pages/NotFoundPage";

const routes = [
    {
        path: '/mypage/diary',
        component: Diary,
        auth: true
    },
    {
        path: '/user/admin',
        component: UserList
    },
    {
        path: '/user/admin/create',
        component: UserCreate
    },
    {
        path: '/user/admin/:id',
        component: UserView
    },
    {
        path: '/user/admin/:id/edit',
        component: UserEdit,
        auth: true
    },
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
    },
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