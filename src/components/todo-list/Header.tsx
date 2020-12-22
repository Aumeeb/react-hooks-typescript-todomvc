import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '..'
import { noop } from '../../utils/noop'

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
  
  return (
    <SearchPanel>
      <SelectIcon onClick={e => onSelectAll([])}>{selectIcon}</SelectIcon>
      <Input type="text" placeholder={textHint} />
    </SearchPanel>
  )
}
export default Header
