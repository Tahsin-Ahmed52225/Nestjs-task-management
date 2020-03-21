//task er ekta interface with the properties of task

export interface Task {
   id : string;
   title : string;
   description : string ;
   status : TaskStatus;

}
//task status er mode

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROCESS = 'IN_PROCESS',
    DONE = 'DONE',
}