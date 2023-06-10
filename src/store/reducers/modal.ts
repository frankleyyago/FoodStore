import { createSlice } from '@reduxjs/toolkit'

type ModalState = {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = ModalSlice.actions
export default ModalSlice.reducer