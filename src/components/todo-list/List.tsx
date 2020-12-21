import { FC } from 'react'
import styled from 'styled-components'

const TodoListUL = styled.ul`
  list-style: none;
  padding: 0;
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
interface ItemProps {
  done: boolean
  isHover: boolean
  isEdit: boolean
  uuid: string
  text: string
}
interface MenuProps {
  items: ItemProps[]
}
const List: FC<MenuProps> = props => {
  return (
    <TodoListUL>
      {props?.items.map(item => (
        <li>
          <ToggleTaskButton>{item.done ? '✔️' : ''} </ToggleTaskButton>
          <span>{item.text}</span>
          <RemoveButton>❌</RemoveButton>
        </li>
      ))}
    </TodoListUL>
  )
}

export default List
