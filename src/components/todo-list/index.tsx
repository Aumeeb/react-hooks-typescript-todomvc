import styled from 'styled-components'
import { Flex } from '..'
import {
  useTodoAdd,
  useTodoFilter,
  useTodoFinish,
  useTodoRemoveFinished,
  useTodoState,
} from '../../state/todo/hooks'
import { shortId } from '../../utils/gen'
import Footer, { FooterProps, TaskProgress } from './Footer'
import Header, { HeaderProps } from './Header'
import List from './List'

// -webkit- 标示删除后显示不出效果。故保留  浏览器 chrome 版本 87.0.4280.88（正式版本） (x86_64)
const Title = styled.div`
  background: linear-gradient(-70deg, #a2facf, #64acff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
  font-weight: 900;
`
const Wrapper = styled(Flex)`
  flex-direction: column;
  margin: auto;
  width: 40vw;
  text-align: center;
`
interface TodoPageProps extends HeaderProps, FooterProps {
  title?: string
  isAllFinish?: boolean
}
export default (props: TodoPageProps) => {
  const add = useTodoAdd()
  const todoFinish = useTodoFinish()
  const removeFinished = useTodoRemoveFinished()
  const { isAllFinish } = useTodoState()
  const filter = useTodoFilter()
  const { items } = useTodoState()
  return (
    <Wrapper>
      <Title>{props.title ?? 'Todo List'}</Title>
      <Header
        highlightIcon={isAllFinish}
        onInsert={value => {
          add({
            isHover: false,
            isEdit: false,
            done: false,
            uuid: shortId(),
            text: value,
            visible: true,
          })
        }}
        onIconClick={() => {
          if (!!isAllFinish) todoFinish(false)
          else todoFinish(true)
        }}
        selectIcon={props.selectIcon}
        textHint={props.textHint}
      ></Header>
      <List items={items} />
      <Footer filter={filter} onClearFinished={removeFinished} />
    </Wrapper>
  )
}
