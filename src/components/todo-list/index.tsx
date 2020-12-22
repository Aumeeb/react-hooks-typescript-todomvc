import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '..'
import { useTodoFinish, useTodoState } from '../../state/todo/hooks'
import Footer from './Footer'
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
interface TodoPageProps extends HeaderProps {
  title?: string
  isAllFinish?: boolean
}
export default (props: TodoPageProps) => {
  const { items } = useTodoState()
  const finish = useTodoFinish()
  const [expend, setExpend] = useState(props.isAllFinish)

  return (
    <Wrapper>
      <Title>{props.title ?? 'Todo List'}</Title>
      <Header
        onSelectAll={finish}
        selectIcon={props.selectIcon}
        textHint={props.textHint}
      ></Header>
      <List items={items} />
      <Footer />
    </Wrapper>
  )
}
