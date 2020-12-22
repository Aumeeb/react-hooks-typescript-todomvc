import React, { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '..'

const FlexStyles: React.CSSProperties = {
  justifyContent: 'space-between',
  padding:15,
  border: '1px solid gray'
}

interface FooterProps {}
const Footer: FC<FooterProps> = props => {
  return (
    <Flex style={FlexStyles}>
      <span> 7 items left</span>
      <span>All</span>
      <span>Active</span>
      <span>Finished</span>
      <span>Clear Finished</span>
    </Flex>
  )
}
export default Footer
