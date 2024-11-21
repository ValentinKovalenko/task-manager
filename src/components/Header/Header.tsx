import {RiUser3Line} from "react-icons/ri";
import {GoPlus} from "react-icons/go";
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <div className='flex items-center justify-between bg-white w-full h-16 px-6 rounded-3xl'>
            <input placeholder='Search' className='h-10 w-1/3 bg-gray-100 rounded-xl pl-4'></input>
            <div className='flex flex-row gap-6'>
                <button className='font-medium h-10 w-32 bg-amber-300 flex items-center justify-center rounded-3xl flex-row gap-2'>
                    <GoPlus/>
                    Create task
                </button>
                <button onClick={handleProfileClick} className='flex items-center justify-center h-10 w-10 bg-orange-400 rounded-full'>
                <RiUser3Line/>
                </button>
            </div>
        </div>
    );
};

export default Header;