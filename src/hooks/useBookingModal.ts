import { create } from 'zustand'

interface BookingModalStore {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useBookingModalStore = create<BookingModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}))

export const useBookingModal = () => {
  const isOpen = useBookingModalStore((state) => state.isOpen)
  const openModal = useBookingModalStore((state) => state.openModal)
  const closeModal = useBookingModalStore((state) => state.closeModal)

  return { isOpen, openModal, closeModal }
}
