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

export const tasks = [
    {
        id: '1',
        name: 'Social media review',
        stage: 'In progress',
        priority: 'Medium',
        assigneeTo: {
            id: '1',
            avatar: ''
        }
    },
    {
        id: '2',
        name: 'Media review',
        stage: 'Not started',
        priority: 'Low',
        assigneeTo: {
            id: '2',
            avatar: ''
        }
    },
    {
        id: '3',
        name: 'Review',
        stage: 'Completed',
        priority: 'High',
        assigneeTo: {
            id: '3',
            avatar: ''
        }
    }
]

export const priorityColors: Record<string, string> = {
    High: 'bg-amber-600',
    Medium: 'bg-amber-400',
    Low: 'bg-amber-200',
};

export const stageColors: Record<string, string> = {
    'Not started': 'bg-gray-100',
    'In progress': 'bg-amber-200',
    'Completed': 'bg-green-200'
};

export const stages = ['Not started', 'In progress', 'Completed'];
export const priorities = ['High', 'Medium', 'Low'];