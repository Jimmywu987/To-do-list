export type ToDoItem = {
  id: string;
  text: string;
  done: boolean;
};

export type State = {
  list: ToDoItem[];
};
