import React, { FC } from 'react'
import styled from 'styled-components'

const SearchPanel = styled.header`
  height: 20px;
`
const SelectIcon = styled.span`
  padding: 10px;
`
export interface HeaderProps {
  textHint?: string
  selectIcon?: string
}

const Header: FC<HeaderProps> = props => {
  const { selectIcon } = props

  return (
    <SearchPanel>
      <SelectIcon>{selectIcon ?? '🐷'}</SelectIcon>
      <input type="text" placeholder={props.textHint ?? ''} />
      
    </SearchPanel>
  )
}
export default Header
