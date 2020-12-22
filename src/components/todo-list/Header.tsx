import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '..'
import { supportKey } from '../../utils/keyboard'
import { noop } from '../../utils/noop'
import { useTodoAdd } from '../../state/todo/hooks'
const SearchPanel = styled(Flex)`
  align-items: center;
  justify-content: center;
`
const SelectIcon = styled.span`
  padding: 10px;
  font-size: 2em;
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
  onSelectAll?: <T>(items: T[]) => void
}

const Header: FC<HeaderProps> = ({
  onSelectAll = noop,
  selectIcon = '🉑',
  textHint = 'What you want to do next?',
}) => {
  const [value, setValue] = useState('')
  const add = useTodoAdd()
  console.log('render count ')

  return (
    <SearchPanel>
      <SelectIcon onClick={e => onSelectAll([])}>{selectIcon}</SelectIcon>
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
