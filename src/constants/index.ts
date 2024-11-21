import {Route} from "./types.ts";
import { MdOutlineSpaceDashboard, MdOutlineTaskAlt  } from "react-icons/md";
import Dashboard from '../pages/Dashboard';
import MyTasks from "../pages/MyTasks";
import NotFound from "../pages/NotFound";
import React from "react";
import Profile from "../pages/Profile/Profile.tsx";

export const routes: Route[] = [
    { path: '/', element: React.createElement(Dashboard), name: 'Dashboard', icon: MdOutlineSpaceDashboard, isProtected: true },
    { path: '/tasks', element: React.createElement(MyTasks), name: 'MyTasks', icon: MdOutlineTaskAlt, isProtected: true },
    { path: '/profile', element: React.createElement(Profile), name: 'Profile', isHiddenInNavbar: true, isProtected: true },
    { path: '*', element: React.createElement(NotFound), name: 'NotFound', isProtected: false, isHiddenInNavbar: true },
];