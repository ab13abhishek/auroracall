import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("aurora-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("aurora-theme", theme);
    set({ theme });
  },
}));
