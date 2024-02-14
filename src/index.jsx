import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/App.css";
import "./style/reset.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home';
import Explore from './pages/explore';
import Notifications from './pages/notifications';
import Messages from './pages/messages';
import Bookmarks from './pages/bookmarks';
import Lists from './pages/lists';
import More from './pages/more';
import { UserContext } from './components/context/UserContext';
import Data from './data/initial-data.json'
import Profile from './pages/profile';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/lists",
        element: <Lists />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/more",
        element: <More />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={Data.tweets}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>,
)
