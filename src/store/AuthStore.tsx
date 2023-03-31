import { create } from "zustand";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import produce from "immer";
import { setToken, getToken, removeToken } from "@/lib/token";
import { User } from "@/types/user";

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;

}

const AuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => {
    setToken('token', user.token);
    set(
      produce<AuthStore>((state) => {
        state.isAuthenticated = true;
        state.user = user;
      })
    );
  },
  logout: () => {
    removeToken('token');
    set(
      produce<AuthStore>((state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
    );
  },
}));

const useAuthStore = createSelectorHooks(AuthStore);
export default useAuthStore;