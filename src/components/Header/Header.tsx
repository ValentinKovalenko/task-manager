import { RiUser3Line } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import DebouncedInput from '../DebouncedInput/DebouncedInput.tsx';
import { useModal } from '../../context/ModalContext/ModalContext.tsx';
import TaskModal from '../TaskModal/TaskModal.tsx';

const Header = () => {
  const navigate = useNavigate();

  const { openModal, closeModal } = useModal();

  const handleCreateTaskClick = () => {
    openModal(
      <TaskModal
        onSubmit={(data) => {
          console.log('Created task:', data);
          // Виклик API для створення задачі
          closeModal();
        }}
      />
    );
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="flex items-center justify-between bg-white w-full h-16 px-6 rounded-3xl">
      <DebouncedInput />
      <div className="flex flex-row gap-6">
        <button
          onClick={handleCreateTaskClick}
          className="font-medium h-10 w-40 bg-amber-300 flex items-center justify-center rounded-3xl border border-black flex-row gap-2 hover:text-white hover:border-white"
        >
          <GoPlus />
          New task
        </button>
        <button
          onClick={handleProfileClick}
          className="flex items-center border border-black justify-center h-10 w-10 bg-orange-400 rounded-full hover:text-white hover:border-white"
        >
          <RiUser3Line />
        </button>
      </div>
    </div>
  );
};

export default Header;
