import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";

// Define the Problem interface
interface Problem {
  ID:string;
  Title: string;
  Statement: string;
  Level: string;
  Input: string;
  Output: string;
  Contraints: string;
}

// Define the state and actions types
interface ProblemState {
  problems: Problem;
  updateProblem: <K extends keyof Problem>(key: K, value: Problem[K]) => void;
}

// In-memory storage fallback
const createInMemoryStorage = (): StateStorage => {
  let store: Record<string, string> = {};
  return {
    getItem: (name) => store[name] || null,
    setItem: (name, value) => {
      store[name] = value;
    },
    removeItem: (name) => {
      delete store[name];
    },
  };
};

// Helper function to safely create a storage object
const getSessionStorage = (): StateStorage => {
  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      return sessionStorage;
    }
  } catch (error) {
    console.error("SessionStorage is not available", error);
  }
  return createInMemoryStorage(); // Fallback to in-memory storage
};

// Create the store with persist middleware
const useProblemStore = create<ProblemState>()(
  persist(
    (set) => ({
      
      problems: {
        ID:"",
        Title: "",
        Statement: "",
        Level: "",
        Input: "",
        Output: "",
        Contraints: "",
      },
      updateProblem: (key, value) =>
        set((state) => ({
          problems: { ...state.problems, [key]: value },
        })),
    }),
    {
      name: "problem-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(getSessionStorage), // use sessionStorage with fallback
    }
  )
);

export default useProblemStore;
