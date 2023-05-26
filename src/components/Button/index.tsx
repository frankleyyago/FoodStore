import { ButtonContainer, ButtonLink, ButtonWrapper } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, title, type, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonWrapper>
        <ButtonContainer type="button" title={title} onClick={onClick}>
          {children}
        </ButtonContainer>
      </ButtonWrapper>
    )
  }

  return (
    <ButtonWrapper>
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    </ButtonWrapper>
  )
}

export default Button
