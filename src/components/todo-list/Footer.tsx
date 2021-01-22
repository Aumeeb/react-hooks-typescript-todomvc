import React, {FC} from 'react'
import styled from 'styled-components'
import {Flex} from '..'
import {useTodoUnfinishedItems} from '../../state/todo/hooks'
import {noop} from '../../utils/noop'

const FlexStyles: React.CSSProperties = {
  justifyContent: 'space-between',
  padding: 15,
  border: '1px solid gray',
  borderRadius: 8,
}
const PlainButton = styled.span`
  cursor: pointer;
`
export type TaskProgress = 'Active' | 'Finished' | 'All'
export interface FooterProps {
  filter?: (state: TaskProgress) => void
  onClearFinished?: () => void
}
const Footer: FC<FooterProps> = ({filter = noop, onClearFinished = noop}) => {
  const unfinishedItem = useTodoUnfinishedItems()

  return (
    <Flex style={FlexStyles}>
      <span> {unfinishedItem.length} items left</span>
      <PlainButton
        onClick={() => {
          filter('All')
        }}>
        All
      </PlainButton>
      <PlainButton
        onClick={() => {
          filter('Active')
        }}>
        Active
      </PlainButton>
      <PlainButton
        onClick={() => {
          filter('Finished')
        }}>
        Finished
      </PlainButton>
      <PlainButton onClick={onClearFinished}>Clear Finished</PlainButton>
    </Flex>
  )
}
export default Footer
