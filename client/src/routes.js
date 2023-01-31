import DiaryList from "./components/Mypage/Diary/page/DiaryList";
import Todo from "./components/Mypage/Todo/Todo";
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
import MemoHome from "./components/Nobd/Memo/MemoHome";
import MemoNew from "./components/Nobd/Memo/MemoNew";
import MemoEdit from "./components/Nobd/Memo/MemoEdit";
import Memo from "./components/Nobd/Memo/Memo";
import Prac from "./components/Nobd/Prac/nobdList";
import LoginForm from "./components/Content/LoginForm";
import SoftwareView from "./components/Syst/Sw/SoftwareView";
import SoftwareList from "./components/Syst/Sw/SoftwareList";
import FloatingPopulationList from "./components/Syst/Bus/floatingPopulationList";
import NotFoundPage from "./components/Nobd/Blog/pages/NotFoundPage";
import Main from "./components/Content/Main";

const routes = [
    {
        path: '/login',
        element: <LoginForm/>
    },
    {
        path: '/mypage/diary',
        element: <DiaryList/>
    },
    {
        path: '/mypage/todo',
        element: <Todo/>
    },
    {
        path: '/user/admin',
        element: <UserList/>
    },
    {
        path: '/user/admin/create',
        element: <UserCreate/>
    },
    {
        path: '/user/admin/:id',
        element: <UserView/>
    },
    {
        path: '/user/admin/:id/edit',
        element: <UserEdit/>,
        auth: true
    },
    {
        path: '/blog',
        element: <ListPage/>
    },
    {
        path: '/blog/home',
        element: <HomePage/>
    },
    {
        path: '/blog/admin',
        element: <AdminPage/>,
        auth: true
    },
    {
        path: '/blog/create',
        element: <CreatePage/>,
        auth: true
    },
    {
        path: '/blog/:id',
        element: <ShowPage/>
    },
    {
        path: '/blog/:id/edit',
        element: <EditPage/>,
        auth: true
    },
    {
        path: '/memo',
        element: <MemoHome/>
    },
    {
        path: '/memo/new',
        element: <MemoNew/>
    },
    {
        path: '/memo/edit',
        element: <MemoEdit/>
    },
    {
        path: '/memo/:id',
        element: <Memo/>
    },
    {
        path: '/prac',
        element: <Prac/>
    },
    {
        path: '/SoftwareList',
        element: <SoftwareList/>
    },
    {
        path: '/SoftwareView/:swtcode',
        element: <SoftwareView/>
    },
    {
        path: '/floatingPopulationList',
        element: <FloatingPopulationList/>
    },
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    },
];

export default routes;