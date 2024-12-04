import {TypesTask} from "../Task/types.ts";

export interface CreateTaskProps {
    task?: TypesTask;
    onSubmit: (data: TypesTask) => void;
}