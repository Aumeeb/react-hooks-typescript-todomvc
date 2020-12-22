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
      text: 'Project outline shoud be done in 3 hours',
    },
    {
      isHover: false,
      isEdit: false,
      done: false,
      uuid: '1',
      text: 'I wanto go to Mars',
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
