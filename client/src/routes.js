import HomePage from "./components/Nobd/Blog/pages/HomePage";
import ListPage from "./components/Nobd/Blog/pages/ListPage";
import CreatePage from "./components/Nobd/Blog/pages/CreatePage";
import EditPage from "./components/Nobd/Blog/pages/EditPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/Blog',
        component: ListPage
    },
    {
        path: '/Blog/create',
        component: CreatePage
    },
    {
        path: '/Blog/edit',
        component: EditPage
    }
];

export default routes;