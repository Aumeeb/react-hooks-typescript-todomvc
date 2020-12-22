import { AppState } from '..'
import { useDispatch, useSelector } from 'react-redux'

export function useTodoState(): AppState['todo'] {
  return useSelector<AppState, AppState['todo']>(state => state.todo)
}
