import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { databaseRef } from "@/Firebase";

interface FrontendProblem {
  id: string;
  Title: string;
  Statement: string;
  Level: string;
  Constraints: string; // Corrected typo in 'Constraints'
}

interface FrontendProblemStore {
  Frontendproblems: FrontendProblem[];
  Frontendloading: boolean;
  getFrontendProblems: () => Promise<void>;
}

export const useFrontendStore = create<FrontendProblemStore>((set) => ({
  Frontendproblems: [],
  Frontendloading: true,
  getFrontendProblems: async () => {
    try {
      const prob = await getDocs(collection(databaseRef, "FrontendProblems"));
      const problems = prob.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as FrontendProblem[];
      set({ Frontendproblems: problems, Frontendloading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useFrontendStore;
