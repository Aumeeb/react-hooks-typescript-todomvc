import { FC, useEffect } from 'react'
import styled from 'styled-components'
import {
  useSyncTaskProcess,
  useTodoRemove,
  useTodoUpdateItem,
} from '../../state/todo/hooks'
import { shortId } from '../../utils/gen'

let render = 0
const TodoListUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    padding: 15px;
    border: 1px solid gray;
    display: flex;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 75%
    );
    border-radius: 8px;
  }
`
const ToggleTaskButton = styled.span`
  color: #95c595;
  margin-right: 20px;
  border: 1px solid gray;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`
const RemoveButton = styled.span`
  margin-left: auto;
`
export interface ItemProps {
  done: boolean
  isHover: boolean
  isEdit: boolean
  id: string
  text: string
  visible: boolean
}
export interface MenuProps {
  items: ItemProps[]
}
const List: FC<MenuProps> = props => {
  console.log(++render)
  useEffect(() => {}, [])
  const updateItem = useTodoUpdateItem()
  const removeItem = useTodoRemove()
  const sync = useSyncTaskProcess()
  return (
    <TodoListUL>
      {props?.items.map(
        (item, idx) =>
          item.visible && (
            <li
              key={item.id}
              // onMouseEnter={e => {
              //   let newItems = { ...item }
              //   newItems.isHover = true
              //   updateItem(newItems)
              // }}
              // onMouseOut={e => {
              //   let newItems = { ...item }
              //   newItems.isHover = false
              //   updateItem(newItems)
              // }}
            >
              <ToggleTaskButton
                onClick={() => {
                  updateItem({ ...item, done: !item.done })
                  sync()
                }}
              >
                {item.done ? '✔️' : ''}{' '}
              </ToggleTaskButton>
              <span>{item.text}</span>
              {!!item.isHover && (
                <RemoveButton
                  onClick={() => {
                    removeItem(item.id)
                  }}
                >
                  ❌
                </RemoveButton>
              )}
            </li>
          )
      )}
    </TodoListUL>
  )
}

export default List
