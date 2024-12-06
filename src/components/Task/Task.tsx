import { RiUser3Line } from 'react-icons/ri';
import { TypesTask } from './types.ts';
import { FC } from 'react';
import { priorityColors, stageColors } from '../../constants';

const Task: FC<TypesTask> = ({ name, stage, priority, assigneeTo }) => {
  return (
    <div className='grid grid-cols-4 items-center px-10 h-14 border-t hover:cursor-pointer hover:bg-gray-50'>
      <div>{name}</div>
      <div className='flex justify-center'>
        <p
          className={`text-center ${stageColors[stage] || 'bg-gray-200'} rounded-full px-4 w-1/2 py-1`}
        >
          {stage}
        </p>
      </div>
      <div className='flex justify-center'>
        <p
          className={`text-center ${priorityColors[priority] || 'bg-gray-200'} rounded-full px-4 w-1/2 py-1`}
        >
          {priority}
        </p>
      </div>
      <div className='flex justify-center'>
        {assigneeTo.avatar?.length ? (
          <img
            className='h-10 w-10 rounded-full'
            src={assigneeTo.avatar}
            alt='avatar'
          />
        ) : (
          <div className='flex items-center border border-black justify-center h-10 w-10 bg-orange-400 rounded-full'>
            <RiUser3Line />
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
