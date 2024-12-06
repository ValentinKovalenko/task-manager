import { useAuth } from '../../context/AuthContext/AuthContext.tsx';
import { routes } from '../../constants';
import { NavLink } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className='bg-white w-1/4 rounded-3xl flex flex-col text-xl'>
      <h3 className='pt-4 w-full text-center h-16 border-b-2'>Task manager</h3>
      <ul>
        {routes
          .filter((route) => !route.isHiddenInNavbar)
          .filter((route) => !route.isProtected || isAuthenticated)
          .map(({ path, name, icon: Icon }) => (
            <li
              className='flex h-14 w-full justify-center border-b-2 hover:cursor-pointer'
              key={path}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex pl-4 items-center w-full  ${
                    isActive
                      ? 'font-bold bg-orange-50 border-s-8 border-amber-300'
                      : 'border-s-8 border-transparent text-gray-700'
                  }`
                }
              >
                {Icon && <Icon className='text-xl' />}
                <span className='pl-2'>{name}</span>
              </NavLink>
            </li>
          ))}
      </ul>
      {isAuthenticated && (
        <div className='mt-auto mb-4'>
          <button
            className='flex h-14 items-center pl-4 w-full border-t-2'
            onClick={logout}
          >
            <MdLogout />
            <span className='pl-2'>Log Out</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
