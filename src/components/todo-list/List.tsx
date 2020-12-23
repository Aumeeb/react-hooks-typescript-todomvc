import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import {
  useSyncTaskProcess,
  useTodoRemove,
  useTodoResetItems,
  useTodoUpdateItem,
} from '../../state/todo/hooks'
import { supportKey } from '../../utils/keyboard'

const Text = styled.span`
  display: inline-block;
`
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
  cursor: pointer;
`
const RemoveButton = styled.span`
  cursor: pointer;
  margin-left: auto;
`

export interface ItemProps {
  done: boolean
  isHover: boolean
  isEdit: boolean
  id: string
  text: string
  visible: boolean
  onTextDoubleClick?: (text: string) => void // 思考如何衡量 props 提升
}
export interface MenuProps {
  items: ItemProps[]
}
const List: FC<MenuProps> = props => {
  // console.log(++render, 'double render appears in React.Strict Mode')

  const updateItem = useTodoUpdateItem()
  const removeItem = useTodoRemove()
  const sync = useSyncTaskProcess()
  const restItems = useTodoResetItems()
  useEffect(() => {
    restItems()
  }, [])
  return (
    <TodoListUL>
      {props?.items.map(
        item =>
          item.visible && (
            <li
              key={item.id}
              onMouseEnter={() => {
                updateItem({ ...item, isHover: true })
              }}
              onMouseLeave={() => {
                console.log('mouse out inside tag li')
                updateItem({ ...item, isHover: false })
              }}
            >
              <ToggleTaskButton
                onClick={() => {
                  updateItem({ ...item, done: !item.done })
                  sync()
                }}
              >
                {item.done ? '✔️' : ''}
              </ToggleTaskButton>
              {item.isEdit ? (
                <input
                  autoFocus
                  onBlur={() => {
                    updateItem({ ...item, isEdit: false })
                  }}
                  onKeyUp={ev => {
                    if (supportKey(ev.key))
                      updateItem({ ...item, isEdit: false })
                  }}
                  value={item.text}
                  onChange={e => {
                    updateItem({ ...item, text: e.target.value })
                  }}
                />
              ) : (
                <Text
                  onDoubleClick={() => {
                    updateItem({ ...item, isEdit: true })
                  }}
                >
                  {item.text}
                </Text>
              )}

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
