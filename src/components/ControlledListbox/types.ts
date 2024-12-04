import {Control} from "react-hook-form";


export interface ControlledListboxProps {
    name: keyof T;
    control: Control <T>;
    options: string[];
    label: string;
}
