import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ControlledListbox from '../ControlledListbox/ControlledListbox.tsx';
import {CreateTaskProps} from "./types.ts";
import {priorities, stages} from "../../constants";


const TaskModal: FC<CreateTaskProps> = ({ task, onSubmit }) => {
    const { control, handleSubmit, setValue, register } = useForm({
        defaultValues: {
            name: '',
            stage: 'Add stage',
            priority: 'Add priority',
            assigneeTo: { id: '', avatar: '' },
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
            <label className="block">
                <span className="text-gray-700">Task Name</span>
                <input
                    {...register('name')}
                    type="text"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Enter task name"
                />
            </label>
            <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                    {...register('description')}
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Enter task description"
                />
            </label>
            <ControlledListbox
                name="stage"
                control={control}
                options={stages}
                label="Stage"
            />
            <ControlledListbox
                name="priority"
                control={control}
                options={priorities}
                label="Priority"
            />
            <button
                type="submit"
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                {task ? 'Update Task' : 'Create Task'}
            </button>
        </form>
    );
};

export default TaskModal;
