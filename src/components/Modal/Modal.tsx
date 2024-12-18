import { Dialog } from '@headlessui/react';
import { useModal } from '../../context/ModalContext/ModalContext.tsx';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = () => {
  const { isOpen, closeModal, content } = useModal();

  return (
    <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
      <div
        className='fixed inset-0 bg-black bg-opacity-50'
        aria-hidden='true'
      />
      <div className='fixed inset-0 flex items-center justify-center'>
        <Dialog.Panel className='w-full max-w-[30%] p-6 bg-gray-100 rounded-2xl'>
          <div className='flex justify-end'>
            <IoCloseSharp
              onClick={closeModal}
              size={20}
              className='hover:cursor-pointer'
            />
          </div>
          {content}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
