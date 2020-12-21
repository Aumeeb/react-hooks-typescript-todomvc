import React, { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '..'

interface FooterProps {}
const Footer: FC<FooterProps> = props => {
  return (
    <Flex>
      <span> 7 items left</span>
      <span>All</span>
      <span>Active</span>
      <span>Finished</span>
      <span>Clear Finished</span>
    </Flex>
  )
}
export default Footer
