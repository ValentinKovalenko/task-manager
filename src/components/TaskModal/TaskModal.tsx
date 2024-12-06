import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ControlledListbox from '../ControlledListbox/ControlledListbox.tsx';
import { CreateTaskProps } from './types.ts';
import { priorities, stages } from '../../constants';
import { GiCheckMark } from 'react-icons/gi';
import { GoChecklist } from 'react-icons/go';

const TaskModal: FC<CreateTaskProps> = ({ task, onSubmit }) => {
  const { control, handleSubmit, setValue, register } = useForm({
    defaultValues: {
      name: task?.name || '',
      stage: task?.stage || 'Add stage',
      priority: task?.priority || 'Add priority',
      assigneeTo: task?.assigneeTo || { id: '', avatar: '' },
      ...task,
    },
  });

  useEffect(() => {
    if (task) {
      setValue('name', task.name);
      setValue('stage', task.stage);
      setValue('priority', task.priority);
      setValue('assigneeTo', task.assigneeTo);
    }
  }, [task, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4 pt-2'
    >
      <label className='flex flex-row gap-4'>
        <div className='flex items-center'>
          <GoChecklist size={25} />
        </div>
        <input
          {...register('name')}
          type='text'
          className='w-full mt-1 p-2 rounded-xl focus:outline-none'
          placeholder='Name of task'
        />
      </label>
      <ControlledListbox
        name='priority'
        control={control}
        options={priorities}
        label='Priority'
      />
      <ControlledListbox
        name='stage'
        control={control}
        options={stages}
        label='Stage'
      />
      <label className='block mt-2'>
        <span className='font-medium text-lg'>Description</span>
        <textarea
          {...register('description')}
          className='w-full mt-1 p-2 border h-40 rounded-xl focus:outline-none'
        />
      </label>
      <div className='flex justify-end'>
        <button
          type='submit'
          className='text-sm h-8 w-36 bg-amber-400 border border-black hover:border-white flex items-center justify-center rounded-3xl flex-row gap-3 hover:text-white'
        >
          <GiCheckMark />
          Create task
        </button>
      </div>
    </form>
  );
};

export default TaskModal;
