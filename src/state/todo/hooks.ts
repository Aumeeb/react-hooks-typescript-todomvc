import { AppState } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { todoSlice } from './slicer'
import type { ItemProps as TodoItemProps } from '../../components/todo-list/List'

const { add } = todoSlice.actions
export function useTodoState(): AppState['todo'] {
  return useSelector<AppState, AppState['todo']>(state => state.todo)
}
export function useTodoItems() {
  return useSelector<AppState>(state => state.todo.items)
}

export function useTodoAdd() {
  const dispatch = useDispatch()
  return useCallback((item: TodoItemProps) => dispatch(add(item)), [dispatch])
}
