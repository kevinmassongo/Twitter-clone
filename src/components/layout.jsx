import React from 'react';
import Sidebar from './sidebar/sidebar';
import Trends from './trends';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="right-sidebar">
                <Sidebar></Sidebar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className="left-sidebar">
                <Trends></Trends>
            </div>
        </>
    );
}

export default Layout;