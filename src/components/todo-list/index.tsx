import styled from 'styled-components'
import { Flex } from '..'
import Footer from './Footer'
import Header, { HeaderProps } from './Header'
import List from './List'

const Title = styled.div`
  background: -webkit-linear-gradient(-70deg, #a2facf, #64acff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
  font-weight: 900;
`
const Wrapper = styled(Flex)`
  flex-direction: column;
  margin: auto;
  width: 30vw;
  text-align: center;
`
interface TodoPageProps extends HeaderProps {
  title?: string
}
export default (props: TodoPageProps) => {
  return (
    <Wrapper>
      <Title>{props.title ?? 'Todo List'}</Title>
      <Header selectIcon={props.selectIcon} textHint={props.textHint}></Header>
      <List
        items={[
          {
            isHover: false,
            isEdit: false,
            done: true,
            uuid: '1',
            text: '123123',
          },
          {
            isHover: false,
            isEdit: false,
            done: false,
            uuid: '1',
            text: '31232131',
          },
        ]}
      />
      <Footer />
    </Wrapper>
  )
}
