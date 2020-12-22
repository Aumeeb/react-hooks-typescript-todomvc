import { AppState } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { todoSlice } from './slicer'
import type { ItemProps as TodoItemProps } from '../../components/todo-list/List'
import { ShortUniqueId } from '../../utils/gen'

const { add, remove, finish, syncTaskProcess, updateItem } = todoSlice.actions
export function useTodoState(): AppState['todo'] {
  return useSelector<AppState, AppState['todo']>(state => state.todo)
}
export function useTodoItems() {
  const list = useSelector<AppState, TodoItemProps[]>(state => state.todo.items)
  return useMemo(() => list.filter(item => !item.done), [list])
}

export function useTodoUnfnishedItems() {
  const list = useSelector<AppState, TodoItemProps[]>(state => state.todo.items)
  return useMemo(() => list.filter(item => !item.done), [list])
}
export function useTodoAdd() {
  const dispatch = useDispatch()
  return useCallback((item: TodoItemProps) => dispatch(add(item)), [dispatch])
}
export function useTodoFinish() {
  const dispatch = useDispatch()
  return useCallback((isFinish: boolean) => dispatch(finish(isFinish)), [
    dispatch,
  ])
}

/**
 * Update property `isAllFinish`of `Todo` which depends on  all the tasks that have been done.
 */
export function useSyncTaskProcess() {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(syncTaskProcess()), [dispatch])
}
export function useTodoUpdateItem() {
  const dispatch = useDispatch()
  return useCallback((item: TodoItemProps) => dispatch(updateItem(item)), [
    dispatch,
  ])
}
export function useTodoRemove() {
  const dispatch = useDispatch()
  return useCallback((id: ShortUniqueId) => dispatch(remove(id)), [dispatch])
}
