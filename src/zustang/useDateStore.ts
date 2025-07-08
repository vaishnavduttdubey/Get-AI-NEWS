// useDateStore.ts
import create from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { databaseRef } from "@/Firebase"; // Adjust this import as per your actual Firebase configuration

interface DateStore {
  dateData: number | null;
  fetchData: (userId: string) => Promise<void>;
}

export const useDateStore = create<DateStore>((set) => ({
  dateData: parseInt(sessionStorage.getItem("dateData") || "-1"),

  fetchData: async (userId: string) => {
    try {
      const docRef = doc(databaseRef, "ProblemDates", userId);
      const docSnap = await getDoc(docRef);
      let id: number = -1;
      const today = new Date().toISOString().split("T")[0];

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && data[today] !== undefined) {
          id = data[today];
        }
      }
      console.log(typeof id)
      sessionStorage.setItem("dateData", JSON.stringify(id));
      set({ dateData: id });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
