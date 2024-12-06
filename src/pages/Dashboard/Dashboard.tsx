import Task from '../../components/Task/Task.tsx';
import { tasks } from '../../constants';
import { useModal } from '../../context/ModalContext/ModalContext.tsx';
import TaskModal from '../../components/TaskModal';

const Dashboard = () => {
  const { openModal, closeModal } = useModal();

  const handleEditTaskClick = (task) => {
    openModal(
      <TaskModal
        task={task}
        onSubmit={(data) => {
          console.log('Updated task:', data);
          closeModal();
          // Виклик API для оновлення задачі
        }}
      />
    );
  };

  return (
    <div className='bg-white h-full py-6 rounded-3xl'>
      <div className='grid grid-cols-4 items-center px-10 font-bold h-14'>
        <h2 className='text-xl'>NAME</h2>
        <h2 className='text-lg text-center text-gray-400'>STAGE</h2>
        <h2 className='text-lg text-center text-gray-400'>PRIORITY</h2>
        <h2 className='text-lg text-center text-gray-400'>ASSIGNEE</h2>
      </div>
      {tasks.map((task) => (
        <div key={task.id} onClick={() => handleEditTaskClick(task)}>
          <Task
            key={task.id}
            name={task.name}
            stage={task.stage as 'Not started' | 'In progress' | 'Completed'}
            priority={task.priority as 'High' | 'Medium' | 'Low'}
            assigneeTo={task.assigneeTo}
          />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
