import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProps } from '../../components/todo-list/List'
import { shortId, ShortUniqueId } from '../../utils/gen'

// 这里有一个引用bug 无法导入 todo-list/Footer.tsx/  export enum TaskProgress
enum TaskProgress {
  Active = 1 << 0,
  Finished = 1 << 1,
  All = Active | Finished,
}
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
      id: shortId(),
      text: 'Project outline shoud be done in 3 hours',
      visible: true,
    },
  ],
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    /** Add a new record  */
    add: (state, action: PayloadAction<ItemProps>) => {
      state.items.push(action.payload)
    },
    /** Remove a record which exist */
    remove: (state, action: PayloadAction<ShortUniqueId>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    /** Remove all record which have been done or finished  */
    removeFinished: state => {
      state.items = state.items.filter(item => !item.done)
    },
    toggle: (state, action: PayloadAction<ItemProps>) => {
      let found = state.items.find(item => item.id === action.payload.id)
      if (found) {
        found.done = !found.done
      }
    },
    /** According to condiction set whether this record display or not */
    filter: (state, action: PayloadAction<TaskProgress>) => {
      switch (action.payload) {
        case TaskProgress.Active:
          state.items.forEach(item => {
            if (!item.done) {
              item.visible = true
            } else {
              item.visible = false
            }
          })
          break

        case TaskProgress.Finished:
          state.items.forEach(item => {
            if (item.done) {
              item.visible = true
            } else {
              item.visible = false
            }
          })
          break
        case TaskProgress.All:
          state.items.forEach(item => {
            item.visible = true
          })
      }
    },
    /**
     *  Set all items which have been finished or not finished
     *  default value is `true`
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
    /** Update specific item of Array */
    updateItem: (state, action: PayloadAction<ItemProps>) => {
      const idx = state.items.findIndex(p => p.id === action.payload.id)
      state.items[idx] = action.payload
    },
    /**
     * Prevent browser crashes & shut down some of properties of item should be reset
     */
    resetItem: state => {
      state.items.forEach(item => {
        item.isEdit = false
        item.isHover = false
      })
    },
  },
})
