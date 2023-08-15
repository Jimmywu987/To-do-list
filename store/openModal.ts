import { ShowModalState } from "~/types";

export const state = () => ({
  showModal: false,
  onCancel: () => {},
  onConfirm: () => {},
});

const resetState = (state: ShowModalState) => {
  state.showModal = false;
  state.onCancel = () => {};
  state.onConfirm = () => {};
};

export const mutations = {
  onOpen(
    state: ShowModalState,
    { onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }
  ) {
    state.showModal = true;
    state.onCancel = onCancel;
    state.onConfirm = onConfirm;
  },
  onClose(state: ShowModalState) {
    resetState(state);
  },
  onConfirm(state: ShowModalState) {
    state.onConfirm();
    resetState(state);
  },
};
