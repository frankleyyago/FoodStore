import * as S from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => <S.Tag>{children}</S.Tag>

export default Tag
