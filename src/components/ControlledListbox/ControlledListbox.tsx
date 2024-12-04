import React from 'react';
import { Controller } from 'react-hook-form';
import { Listbox } from '@headlessui/react';
import {ControlledListboxProps} from "./types.ts";

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
                <div>
                    <span className="text-gray-700">{label}</span>
                    <Listbox {...field} as="div" className="relative mt-1">
                        <Listbox.Button className="text-start w-full">
                           + {field.value}
                        </Listbox.Button>
                        <Listbox.Options className="absolute w-full bg-white z-10">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option}
                                    value={option}
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                >
                                    {option}
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