import { TagStyles } from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagStyles>{children}</TagStyles>

export default Tag
