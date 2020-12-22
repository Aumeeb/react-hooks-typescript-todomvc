import React, { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '..'
import { useTodoUnfnishedItems } from '../../state/todo/hooks'

const FlexStyles: React.CSSProperties = {
  justifyContent: 'space-between',
  padding: 15,
  border: '1px solid gray',
}

interface FooterProps {}
const Footer: FC<FooterProps> = props => {
  const unfinishedItem = useTodoUnfnishedItems()
  return (
    <Flex style={FlexStyles}>
      <span> {unfinishedItem.length} items left</span>
      <span>All</span>
      <span>Active</span>
      <span>Finished</span>
      <span>Clear Finished</span>
    </Flex>
  )
}
export default Footer
