import {Control} from "react-hook-form";


export interface ControlledListboxProps {
    name: keyof T;
    control: Control <T>;
    options: { label: string; value: string }[''];
    label: string;
}