import {RiUser3Line} from "react-icons/ri";
import {GoPlus} from "react-icons/go";
import {useNavigate} from "react-router-dom";
import DebouncedInput from "../DebouncedInput/DebouncedInput.tsx";

const Header = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <div className='flex items-center justify-between bg-white w-full h-16 px-6 rounded-3xl'>
            <DebouncedInput/>
            <div className='flex flex-row gap-6'>
                <button className='font-medium h-10 w-40 bg-amber-300 flex items-center justify-center rounded-3xl border border-black flex-row gap-2 hover:text-white hover:border-white'>
                    <GoPlus/>
                    Create task
                </button>
                <button
                    onClick={handleProfileClick}
                    className='flex items-center border border-black justify-center h-10 w-10 bg-orange-400 rounded-full hover:text-white hover:border-white'
                >
                <RiUser3Line/>
                </button>
            </div>
        </div>
    );
};

export default Header;