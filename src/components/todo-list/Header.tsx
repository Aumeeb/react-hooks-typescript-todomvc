import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '..'
import { supportKey } from '../../utils/keyboard'
import { noop } from '../../utils/noop'

const SearchPanel = styled(Flex)`
  align-items: center;
  justify-content: center;
`
const SelectIcon = styled.span<{ highlightIcon?: boolean }>`
  cursor: pointer;
  padding: 10px;
  font-size: 2em;
  color: ${({ highlightIcon }) =>
    highlightIcon === true ? '#61caca' : '#000'};
`
const Input = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 4px;
`
export interface HeaderProps {
  textHint?: string
  selectIcon?: string
  highlightIcon?: boolean
  /**The Event triggers when you are pressing key 'enter' */
  onInsert?: (val: string) => void
  onIconClick?: () => void
}

const Header: FC<HeaderProps> = ({
  selectIcon = '❄️',
  textHint = 'What you want to do next?',
  onIconClick = noop,
  onInsert = noop,
  highlightIcon = false,
}) => {
  const [value, setValue] = useState('')

  return (
    <SearchPanel>
      <SelectIcon
        highlightIcon={highlightIcon}
        onClick={() => {
          onIconClick()
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
          if (supportKey(ev.key) && value.trim() !== '') {
            onInsert(value)
            setValue('')
          }
        }}
      />
    </SearchPanel>
  )
}
export default Header
