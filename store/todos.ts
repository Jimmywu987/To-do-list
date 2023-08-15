import { ToDoState, ToDoItem } from "~/types";
import { v4 as uuidv4 } from "uuid";
import { ToDoItemStatusEnums } from "~/enums/ToDoItemStatusEnums";

export const state = () => ({
  status: ToDoItemStatusEnums.ALL,
  list: [],
  removeItemId: null,
});

export const mutations = {
  add(state: ToDoState, toDoItem: Pick<ToDoItem, "text" | "deadline">) {
    state.list.push({
      id: uuidv4(),
      done: false,
      ...toDoItem,
    });
  },
  edit(state: ToDoState, updatedItem: ToDoItem) {
    state.list = state.list.map((item) =>
      item.id !== updatedItem.id ? item : updatedItem
    );
  },
  remove(state: ToDoState) {
    state.list = state.list.filter((item) => item.id !== state.removeItemId);
    state.removeItemId = null;
  },
  toggle(state: ToDoState, todo: ToDoItem) {
    todo.done = !todo.done;
  },
  storeRemoveItemId(state: ToDoState, id: string) {
    state.removeItemId = id;
  },
  emptyRemoveItemId(state: ToDoState) {
    state.removeItemId = null;
  },
  updateStatus(state: ToDoState, status: ToDoItemStatusEnums) {
    state.status = status;
  },
};
