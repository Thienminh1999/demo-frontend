import { DEFAULT_LANGUAGE, MY_LANGUAGE } from '@/shared/constants/locale.constant';
import { PortDataType } from '@/shared/types/Port.type';
import { create } from 'zustand'
import Cookies from "js-cookie";


interface PortState {
  ports: PortDataType
  setPorts: (ports: PortDataType) => void
  setLocale: (locale: string) => void
  locale: string
}

const initialState: PortDataType = [];

export const usePortStore = create<PortState>((set) => ({
  ports: initialState,
  locale: Cookies.get(MY_LANGUAGE) || DEFAULT_LANGUAGE,
  setPorts: (ports: PortDataType) => set(() => ({ ports: ports })),
  setLocale: (newLocale: string) => set(() => ({ locale: newLocale })),
}));