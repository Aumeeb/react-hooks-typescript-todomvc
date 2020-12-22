import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '..'
import { supportKey } from '../../utils/keyboard'
import { noop } from '../../utils/noop'
import {
  useSyncTaskProcess,
  useTodoAdd,
  useTodoFinish,
  useTodoState,
} from '../../state/todo/hooks'
import { runInContext } from 'vm'
const SearchPanel = styled(Flex)`
  align-items: center;
  justify-content: center;
`
const SelectIcon = styled.span<{ isAllFinish?: boolean }>`
  padding: 10px;
  font-size: 2em;
  color: ${({ isAllFinish }) => (isAllFinish === true ? '#61caca' : '#000')};
`
const Input = styled.input`
  width: 50%;
  height: 40px;
`
export interface HeaderProps {
  textHint?: string
  selectIcon?: string
  /**The Event triggers when you are pressing key 'enter' */
  onInsert?: (val: string) => void
  onSelectAll?: (state: boolean) => void
}

const Header: FC<HeaderProps> = ({
  onSelectAll = noop,
  selectIcon = '🉑',
  textHint = 'What you want to do next?',
}) => {
  const { isAllFinish, items } = useTodoState()
  const [value, setValue] = useState('')
  const todoFinish = useTodoFinish()
  const add = useTodoAdd()
  console.log(isAllFinish, items)

  return (
    <SearchPanel>
      <SelectIcon
        isAllFinish={isAllFinish}
        onClick={() => {
          if (!!isAllFinish) todoFinish(false)
          else todoFinish(true)
        }}
      >
        {selectIcon}
      </SelectIcon>
      <Input
        type="text"
        placeholder={textHint}
        value={value}
        onChange={e => {
          console.log(e.target.value)

          setValue(e.target.value)
        }}
        onKeyUp={ev => {
          if (supportKey(ev.key)) {
            add({
              isHover: false,
              isEdit: false,
              done: true,
              uuid: '1',
              text: value,
            })
            setValue('')
          }
        }}
      />
    </SearchPanel>
  )
}
export default Header
