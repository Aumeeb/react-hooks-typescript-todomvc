import styled from 'styled-components'
import Header from './Header'

const Title = styled.div`
  background: -webkit-linear-gradient(-70deg, #a2facf, #64acff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2em;
  font-weight: 900;
`

interface TodoPageProps {
  title?: string
}
export default (props: TodoPageProps) => {
  return (
    <div>
      <Title>{props.title ?? 'Todo List'}</Title>
      <Header></Header>
    </div>
  )
}
