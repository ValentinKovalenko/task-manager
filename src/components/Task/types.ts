export interface TypesTask {
    name: string;
    stage: 'Not started' | 'In progress' | 'Completed';
    priority: 'High' | 'Medium' | 'Low';
    assigneeTo: {
        id: string;
        avatar?: string;
    }
}