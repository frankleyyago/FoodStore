import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: JSX.Element
}

const Button = ({ children, title, type, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonWrapper>
        <S.Button type="button" title={title} onClick={onClick}>
          {children}
        </S.Button>
      </S.ButtonWrapper>
    )
  }

  return (
    <S.ButtonWrapper>
      <S.ButtonLink to={to as string} title={title}>
        {children}
      </S.ButtonLink>
    </S.ButtonWrapper>
  )
}

export default Button
