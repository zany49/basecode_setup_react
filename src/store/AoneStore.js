import {create} from "zustand";
import { devtools } from "zustand/middleware";
import {getDummy} from "../services/aone_services"







const initialValues = {
    userData: []
}

let aoneStore = (set, get) => ({
    ...initialValues,
    getDummy: async () => {
        const response = await getDummy();
        set({ userData: "dummy data" });
        return response;
      }
})

aoneStore = devtools(aoneStore);

export const useAoneStore = create(aoneStore);
