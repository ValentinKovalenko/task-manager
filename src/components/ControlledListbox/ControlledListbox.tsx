import React from 'react';
import { Controller } from 'react-hook-form';
import { Listbox } from '@headlessui/react';
import { ControlledListboxProps } from './types.ts';
import { FiUserCheck } from 'react-icons/fi';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';
import { MdOutlineFlag } from 'react-icons/md';

const labelIcons: Record<string, JSX.Element> = {
  Priority: <MdOutlineFlag size={20} />,
  Stage: <BsFileEarmarkBarGraph size={20} />,
  assign: <FiUserCheck size={20} />,
};

const ControlledListbox: React.FC<ControlledListboxProps> = ({
  name,
  control,
  options,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-row items-center mt-4">
          <span className="flex flex-row gap-2 text-gray-700 w-1/4">
            {labelIcons[label] || null} {label}
          </span>
          <Listbox {...field} as="div" className="relative">
            <Listbox.Button className="text-start w-full">
              +{' '}
              {options.find((option) => option.label === field.value)?.label ||
                `${field.value}`}
            </Listbox.Button>
            <Listbox.Options className="absolute w-40 bg-gray-100 border rounded-xl z-10">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.label}
                  className="p-2 cursor-pointer hover:bg-white"
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      )}
    />
  );
};

export default ControlledListbox;
