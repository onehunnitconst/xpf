import { create } from 'zustand';

type State = {
  count: number;
}

type Action = {
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
}

type CounterStore = State & Action;

const initialState: State = {
  count: 0,
}

export const useCounterStore = create<CounterStore>((set) => ({
  ...initialState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementByAmount: (amount) => set((state) => ({ count: state.count + amount })),
}));
