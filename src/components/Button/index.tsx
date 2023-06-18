import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: JSX.Element
  disabled?: boolean
}

const Button = ({ children, title, type, onClick, to, disabled }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonWrapper>
        <S.Button
          type="button"
          title={title}
          onClick={onClick}
          disabled={disabled}
        >
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
