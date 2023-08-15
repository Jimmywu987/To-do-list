import { ToDoItemStatusEnums } from "~/enums/ToDoItemStatusEnums";

export type ToDoItem = {
  id: string;
  text: string;
  done: boolean;
  deadline: Date;
};

export type ToDoState = {
  status: ToDoItemStatusEnums;
  list: ToDoItem[];
  removeItemId: string | null;
};

export type ShowModalState = {
  showModal: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};
