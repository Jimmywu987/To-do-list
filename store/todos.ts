import { State, ToDoItem } from "~/types";
import { v4 as uuidv4 } from "uuid";
export const state = () => ({
  list: [],
});
export const mutations = {
  add(state: State, text: string) {
    state.list.push({
      id: uuidv4(),
      text,
      done: false,
    });
  },
  remove(state: State, { id }: { id: string }) {
    state.list.filter((item) => item.id !== id);
  },
  toggle(state: State, todo: ToDoItem) {
    todo.done = !todo.done;
  },
};
