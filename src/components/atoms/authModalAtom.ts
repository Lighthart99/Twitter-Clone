import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: ModalView;
}

export type ModalView = "signin" | "signup" | "resetpassword";

const defaultModalState: AuthModalState = {
  open: false,
  view: "signin",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
