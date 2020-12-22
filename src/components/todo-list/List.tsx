import { FC } from 'react'
import styled from 'styled-components'
import { useTodoRemove, useTodoUpdateItem } from '../../state/todo/hooks'

const TodoListUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    padding: 15px;
    border: 1px solid gray;
    display: flex;
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
  uuid: string
  text: string
}
export interface MenuProps {
  items: ItemProps[]
}
const List: FC<MenuProps> = props => {
  const updateItem = useTodoUpdateItem()
  const removeItem = useTodoRemove()
  return (
    <TodoListUL>
      {props?.items.map(item => (
        <li
          onMouseEnter={() => {
            const newItems = { ...item }
            newItems.isHover = true
            updateItem(newItems)
            console.log(item)
          }}
          onMouseOut={() => {
            console.log(item)
          }}
        >
          <ToggleTaskButton>{item.done ? '✔️' : ''} </ToggleTaskButton>
          <span>{item.text}</span>
          {!!item.isHover && (
            <RemoveButton
              onClick={() => {
                removeItem(item.uuid)
              }}
            >
              ❌
            </RemoveButton>
          )}
        </li>
      ))}
    </TodoListUL>
  )
}

export default List
