import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProps } from '../../components/todo-list/List'

type SliceState = {
  items: ItemProps[]
}

const initialState: SliceState = {
  items: [
    {
      isHover: false,
      isEdit: false,
      done: true,
      uuid: '1',
      text: '123123',
    },
    {
      isHover: false,
      isEdit: false,
      done: false,
      uuid: '1',
      text: '31232131',
    },
  ],
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemProps>) => {
      state.items.push(action.payload)
    },
  },
})
