import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className='h-screen flex p-10'>
            <Navbar/>
            <div className='w-full h-full pl-10 flex flex-col'>
                <Header/>
                <main className='flex-1 pt-10'>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default Layout;