import React, { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '..'

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
}

const Header: FC<HeaderProps> = props => {
  const { selectIcon } = props

  return (
    <SearchPanel>
      <SelectIcon>{selectIcon ?? '🉑'}</SelectIcon>
      <Input
        type="text"
        placeholder={props.textHint ?? 'What you want to do next?'}
      />
    </SearchPanel>
  )
}
export default Header
