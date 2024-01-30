import { PortDataType } from '@/shared/types/Port.type';
import { create } from 'zustand'


interface PortState {
  ports: PortDataType
  setPorts: (ports: PortDataType) => void
}

const initialState: PortDataType = [];

export const usePortStore = create<PortState>((set) => ({
  ports: initialState,
  setPorts: (ports: PortDataType) => set(() => ({ ports: ports })),
}));