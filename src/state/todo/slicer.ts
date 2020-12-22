import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProps } from '../../components/todo-list/List'
import { ShortUniqueId } from '../../utils/gen'

type SliceState = {
  isAllFinish: boolean
  items: ItemProps[]
}

const initialState: SliceState = {
  isAllFinish: false,
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
    remove: (state, action: PayloadAction<ShortUniqueId>) => {
      state.items = state.items.filter(item => item.uuid !== action.payload)
    },
    toggle: (state, action: PayloadAction<ItemProps>) => {
      let found = state.items.find(item => item.uuid === action.payload.uuid)
      if (found) {
        found.done = !found.done
      }
    },
    /**
     *  Set all items which have been finished or not finished
     *  default value is `true`
     * @param state
     * @param action
     */
    finish: (state, action: PayloadAction<boolean>) => {
      if (action.payload === true) {
        state.items.forEach(p => (p.done = true))
      } else {
        state.items.forEach(p => (p.done = false))
      }
      state.isAllFinish = state.items.every(item => item.done)
    },
    syncTaskProcess: state => {
      state.isAllFinish = state.items.every(item => item.done)
    },
    updateItem: (state, action: PayloadAction<ItemProps>) => {
      const idx = state.items.findIndex(p => p.uuid === action.payload.uuid)
      state.items[idx] = action.payload
    },
  },
})
