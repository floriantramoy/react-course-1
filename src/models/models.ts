export interface Todo {
  id: number;
  title: string;
  description : string;
  priority : string;
  assignedTo : string
  isInProgress: boolean;
  isDone: boolean;
}
