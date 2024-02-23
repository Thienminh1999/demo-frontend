import { DEFAULT_LANGUAGE, MY_LANGUAGE } from '@/shared/constants/locale.constant';
import { PortDataType } from '@/shared/types/Port.type';
import { create } from 'zustand'
import Cookies from "js-cookie";
import { devtools, persist } from 'zustand/middleware';

type ModalState = {
  isOpen: boolean
  isEdit: boolean
  formData: any
}
interface PortState {
  ports: PortDataType
  setPorts: (ports: PortDataType) => void
  setLocale: (locale: string) => void
  locale: string
  modalState: ModalState
  setModalState: (state: ModalState) => void
}

const initialState: PortDataType = [];

export const initialModalState = {
  isOpen: false,
  isEdit: false,
  formData: null
}

export const usePortStore = create<PortState>()(
  persist(
    devtools(
      (set) => ({
        ports: initialState,
        locale: Cookies.get(MY_LANGUAGE) || DEFAULT_LANGUAGE,
        modalState: initialModalState,
        setPorts: (ports: PortDataType) => set(() => ({ ports: ports })),
        setLocale: (newLocale: string) => set(() => ({ locale: newLocale })),
        setModalState: (state: ModalState) => set(() => ({ modalState: state })),
      })), {
    name: 'port-store'
  }));