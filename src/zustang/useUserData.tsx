import { create } from "zustand";

interface Data {
  userName: string;
  userEmail: string;
  userImageUrl: string;
  uid:string
}

interface UserData {
  isLoggedIn: boolean;
  userData: Data;
  setUserData: (data: Data) => void;
  setIsLoggedIn: (value: boolean) => void;
}

const useUserDataStore = create<UserData>((set) => ({
  isLoggedIn: sessionStorage.getItem("isLoggedIn") === "true" || false,
  userData: JSON.parse(sessionStorage.getItem("userData") || "{}") || {
    userName: "",
    userEmail: "",
    userImageUrl: "",
    uid:""
  },
  setUserData: (data: Data) => {
    sessionStorage.setItem("userData", JSON.stringify(data));
    set({ userData: data });
  },
  setIsLoggedIn: (value: boolean) => {
    sessionStorage.setItem("isLoggedIn", String(value));
    set({ isLoggedIn: value });
  },
}));

export default useUserDataStore;
