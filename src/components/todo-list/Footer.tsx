import React, {FC} from 'react'
import styled from 'styled-components'
import {Flex} from '..'
import {useTodoUnfnishedItems} from '../../state/todo/hooks'
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
export enum TaskProgress {
  Active = 1 << 0,
  Finished = 1 << 1,
  All = Active | Finished,
}
// export const TaskProgress ={

// }
export interface FooterProps {
  filter?: (state: TaskProgress) => void
  onClearFinished?: () => void
}
const Footer: FC<FooterProps> = ({filter = noop, onClearFinished = noop}) => {
  const unfinishedItem = useTodoUnfnishedItems()
  
  return (
    <Flex style={FlexStyles}>
      <span> {unfinishedItem.length} items left</span>
      <PlainButton
        onClick={() => {
          filter(TaskProgress.All)
        }}>
        All
      </PlainButton>
      <PlainButton
        onClick={() => {
          filter(TaskProgress.Active)
        }}>
        Active
      </PlainButton>
      <PlainButton
        onClick={() => {
          filter(TaskProgress.Finished)
        }}>
        Finished
      </PlainButton>
      <PlainButton onClick={onClearFinished}>Clear Finished</PlainButton>
    </Flex>
  )
}
export default Footer
