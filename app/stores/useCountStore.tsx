import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

const useCountStore = create(
    persist(combine(
        {
            count:0
        },
        (set) => ({
            decrease: () => set((state) => ({count:state.count-1})),
            increase: () => set((state) => ({count:state.count+1})),
        })
    ), {
        name:"count-store"
    })
)

export default useCountStore