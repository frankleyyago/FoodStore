import { ButtonStyles, LinkStyles, ButtonWrapperStyles } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, title, type, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonWrapperStyles>
        <ButtonStyles type="button" title={title} onClick={onClick}>
          {children}
        </ButtonStyles>
      </ButtonWrapperStyles>
    )
  }

  return (
    <ButtonWrapperStyles>
      <LinkStyles to={to as string} title={title}>
        {children}
      </LinkStyles>
    </ButtonWrapperStyles>
  )
}

export default Button
