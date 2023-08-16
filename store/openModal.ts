import { ShowModalState } from "~/types";

export const state = () => ({
  showModal: false,
});

export const mutations = {
  onOpen(state: ShowModalState) {
    state.showModal = true;
  },
  onClose(state: ShowModalState) {
    state.showModal = false;
  },
};
