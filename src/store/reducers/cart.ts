import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../Models/Restaurant' // <-- Nota: Lembre de ajustar se o Prato morar em Models!

type PratoState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: PratoState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Este prato já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    // ADICIONADO: Reducer que limpa o carrinho após a finalização da compra
    clear: (state) => {
      state.items = []
    }
  }
})

// CORRIGIDO: Incluído o 'clear' na lista de actions exportadas!
export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
